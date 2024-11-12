const express = require('express');
const ffi = require('ffi-napi');
const app = express();
const port = 3000;

// Load CUDA library
const cudaLib = ffi.Library('./build/libchat_processor', {
    'processMessageCuda': ['void', ['string', 'string', 'int']]
});

app.use(express.json());

app.post('/api/process-message', (req, res) => {
    const message = req.body.message;
    const outputBuffer = Buffer.alloc(message.length);
    
    cudaLib.processMessageCuda(message, outputBuffer, message.length);
    
    res.json({
        processed: outputBuffer.toString(),
        original: message
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 