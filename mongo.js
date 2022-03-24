const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const newNote = process.argv[3]
const firstRun = process.argv[4]

const url =
  `mongodb+srv://Folami:${password}@cluster0.dqcwl.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

if (firstRun) {
    /*
    const note1 = new Note({
        content: "Browser can execute only Javascript",
        date: "2022-01-10T18:39:34.091Z",
        important: false
    })*/
    const note2 = new Note({
        content: 'React js and React native',
        date: new Date(),
        important: true,
    })
    const note3 = new Note({
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-01-10T19:20:14.298Z",
        important: true
    })
    
    const initNotes = [note2, note3]
    initNotes.forEach(note => {
        note.save().then(result => {
            console.log('note saved!')
            console.log('added ', `${note.content}`, ' to notes')
        })
    })
}

if (newNote) {
    const note = new Note({
        content: newNote,
        date: new Date(),
        important: false,
    })
    note.save().then(result => {
        console.log('note saved!')
        console.log('added ', `${note.content}`, ' to notes')
    })
}

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})
