# ShirtLab

ShirtLab is a dynamic and interactive web application that empowers users to customize shirts with unique designs using AI-generated imagery, custom uploads, and color palettes. The project leverages modern web technologies for a seamless 3D customization experience.

---

## Features

- **3D Shirt Customization**: Real-time 3D rendering and customization of shirts using Three.js.
- **AI-Powered Design**: Generate unique designs using the Clipdrop API by entering a text prompt.
- **File Uploads**: Upload your own images to customize shirt designs.
- **Color Picker**: Choose shirt colors interactively.
- **Interactive UI**: Smooth animations and transitions powered by Framer Motion.
- **Responsive Design**: Fully functional across devices and screen sizes.

---

## Tech Stack

### Frontend (Client)
- **React**: Core library for building the user interface.
- **React Three Fiber**: Framework for rendering 3D models using Three.js.
- **@react-three/drei**: Additional utilities for 3D rendering.
- **Framer Motion**: For smooth animations and transitions.
- **Valtio**: State management for reactivity.
- **Tailwind CSS**: Styling the application.
- **React Toastify**: Displaying notifications.
- **React Color**: Color picker for customization.

### Backend (Server)
- **Express.js**: Framework for building the RESTful API.
- **Cloudinary**: Handling image storage.
- **Mongoose**: Managing MongoDB for database operations.
- **Axios**: Making HTTP requests to the Clipdrop API.
- **Dotenv**: Managing environment variables securely.
- **Nodemon**: Development utility for automatically restarting the server.
- **FormData**: Facilitating file uploads and form submissions.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (for database)

