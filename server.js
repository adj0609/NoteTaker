const path = require('path');
const PORT = process.env.PORT || 5500;
const express = require('express');
const app = express();
const fs = require('fs');
const htmlRoutes = ('./routes/htmlRoutes');
const {deleteNoteEndPoint, createNoteEndPoint, getNotesEndPoint} = require('./Routes/apiRoutes/noteRoutes')

app.use(express.urlencoded({ extended: true,
}));

app.use(express.json());
app.use(express.static('public'));
app.get('/api/notes', getNotesEndPoint);
app.delete('/api/notes', deleteNoteEndPoint);
app.post('/api/notes', createNoteEndPoint);




app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})


app.listen(PORT, () => {
    console.log('API server now on port${PORT}!');
});
