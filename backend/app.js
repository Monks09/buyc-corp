const express = require('express');

const cors = require('cors');

const app = express();

const PORT = 8080;


app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
    try {
        return res.status(200).send("Welcome to BUYC Corp");
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong");
    }
})


app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})