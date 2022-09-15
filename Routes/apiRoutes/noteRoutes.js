const router = require("express").Router();
const { notes } = require('../../db/db');
const { createNewNote, editNote, removeNote } = require('../../lib/noteFunction');


router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        createNewNote(req.body, notes);
    }else{
        editNote(req.body, notes);
    }
    res.json(req.body);
    
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    removeNote(notes);
    res.json(true);
});



module.exports = router;