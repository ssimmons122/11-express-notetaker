const fs = require ("fs"); //
let data = json.parse(fs.readFileSync("./db/db.json", "utf8")); // fix dbjson route

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
       
        res.json(data);
    });
}