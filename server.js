const express = require ('express');
const fs = require ('fs');
const path = require ('path');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('public', express.static(`${__dirname}/public`));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log(`App listening at http://localhost:${PORT}`);
});