const express = require('express');

const app = express();

const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})