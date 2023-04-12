const express = require ('express');
const fs = require ('fs');
const path = require ('path');
const htmlRoutes = require ("./routes/html-route");
const apiRoutes = require ("./routes/api-routes");

const PORT = process.env.PORT || 3001;
const app = express();

//middleware for parsing app/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('public', express.static(`${__dirname}/public`));

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT}`);
});