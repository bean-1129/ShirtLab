import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';
import FormData from 'form-data';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Prompt is required" });
        }

        // Prepare form data for Clipdrop API
        const formData = new FormData();
        formData.append('prompt', prompt);

        // Call the Clipdrop API
        const response = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                ...formData.getHeaders(),
                'x-api-key': process.env.CLIPDROP_API_KEY,
            },
            responseType: 'arraybuffer', // Since the response is an image
        });

        // Convert the image to Base64 to send back to the client
        const imageBase64 = Buffer.from(response.data).toString('base64');

        res.status(200).json({
            photo: `data:image/png;base64,${imageBase64}`,
            remainingCredits: response.headers['x-remaining-credits'],
            creditsConsumed: response.headers['x-credits-consumed'],
        });
    } catch (error) {
        console.error(error);
        if (error.response) {
            res.status(error.response.status).json({
                message: error.response.data.error || "Error from Clipdrop API",
            });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});

export default router;
