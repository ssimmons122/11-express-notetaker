const path = require('path');
const router = require('express-router');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})
    router.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    })

module.exports = router;