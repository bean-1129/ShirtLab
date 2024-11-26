import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Route for DALL·E or Clipdrop API
app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from Saurabh" });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}!!`));
