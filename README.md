# CUDA-Enabled Chat Application

A real-time chat application that leverages NVIDIA CUDA for GPU-accelerated message processing.

## Prerequisites

- NVIDIA GPU with CUDA support
- CUDA Toolkit (11.0 or later)
- Node.js (14.0 or later)
- npm (6.0 or later)

## File Structure 
├── src/
│ ├── cuda/
│ │ └── chat_processor.cu
│ ├── public/
│ │ ├── index.html
│ │ ├── style.css
│ │ └── script.js
│ └── server/
│ └── server.js
├── build/
│ └── libchat_processor.so
├── package.json
└── README.md




## Installation

1. Clone the repository:

    git clone https://github.com/yourusername/cuda-chat.git

2. Install Node.js dependencies:

npm install express ffi-napi

3. Compile the CUDA code:
    bash
    mkdir -p build
    nvcc -o build/libchat_processor.so --shared src/cuda/chat_processor.cu


1. Create a `package.json` file:
    json
        {
        "name": "cuda-chat",
        "version": "1.0.0",
        "description": "CUDA-enabled chat application",
        "main": "server/server.js",
        "scripts": {
        "start": "node server/server.js",
        "build-cuda": "nvcc -o build/libchat_processor.so --shared src/cuda/chat_processor.cu"
        },
        "dependencies": {
        "express": "^4.17.1",
        "ffi-napi": "^4.0.3"
        }
        }


## Running the Application

1. Start the server:

    npm start
