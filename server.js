
const PORT = process.env.PORT || 5501;
const express = require('express');
const app = express();
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true
}));

app.use(express.json());
app.use(express.static('public'));
app.use('/', apiRoutes);
app.use('/', htmlRoutes);





app.get('/notes', (req, res) => {
    //const notes = fs.readFileSync("./db/db.json")
    //res.render ("notes", JSON.parse(notes));
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/', (req, res) => {
   // res.render ("index");
   res.sendFile(path.join(__dirname, './public/index.html'))
})


app.listen(PORT, () => {
    console.log(`API server now on port${PORT}!`);
});
