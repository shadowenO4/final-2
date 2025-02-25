const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const WebSocket = require('ws'); // Import WebSocket library
dotenv.config();

const app = express();
const axios = require('axios'); // Import axios for making API requests

const wss = new WebSocket.Server({ port: 8083 }); // Create WebSocket server on port 8084

wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});



app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.get('/api', async (req, res) => {
    if (req.query.error) {
        return res.status(500).send('Error fetching data from API');
    }



    const location = req.query.location; // Get location from query parameters
    const googlesURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=YOUR_API`; 


    try {
        const response = await axios.get(googlesURL);




        res.json(response.data.results);

    } catch (error) {
        res.status(500).send('Error fetching data from API');
    }
});

const PORT = process.env.PORT || 3000; 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing
