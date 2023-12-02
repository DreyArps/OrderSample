const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(cors()); 
app.use(bodyParser.json());

// Endpoint to handle order submissions
app.post('/submit-order', (req, res) => {
    const orderData = req.body;

    // Perform any necessary processing or validation here
    // For simplicity, we'll just log the order data
    console.log('Received order:', orderData);

    // Respond with a success message (you might want to send more detailed information)
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
