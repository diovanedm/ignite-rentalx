import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.send('Hello World! Welcome to Node course')
}) 

app.listen(3333, () => console.log("Server is running!"))