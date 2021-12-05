const express = require('express');
const app = express();
const notes = require('./data/notes');
const dotenv = require('dotenv');
dotenv.config();


app.get('/', (req, res)=>{
    res.send("API is running!")
})
app.get('/api/notes',(req, res)=>{
    res.json(notes);
})
app.get('/api/notes/:id',(req, res)=>{
    const noteData = notes.find(n => n._id == req.params.id);
    res.json(noteData); 
});
const port = process.env.PORT || 4000
app.listen(port, (err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        console.log(`Server Started at port ${port}`);
    }
})