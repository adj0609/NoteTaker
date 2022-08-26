const notes = require('../../db/db.json');
const {
    createNewNote,
    deleteNote
} = require('../../lib/noteFunction.js');

function getNotesEndPoint (req, res) {
    let saved = notes;
    res.json(saved);
}

function createNoteEndPoint (req, res) {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
}

function deleteNoteEndPoint(req, res) {
    deleteNote(notes, req.params.id);
    res.json(notes);
}

module.exports = {deleteNoteEndPoint, createNoteEndPoint, getNotesEndPoint}