const router = require('express').Router();
const noteService = require('../services/note-service');

router.get('/note', (req, res) => {
    res.send(noteService.hello());
});

module.exports = router;