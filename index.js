const express = require('express')
const app = express()

app.use(express.json())

const persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get("/", (req,res) => {
    res.send("<h1>Hello There </h1>")
})

app.get("/api/persons", (req,res) => {
    res.json(persons)
})
app.get("/info", (req,res) => {
    const date = new Date()
    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const body = (
        `<h4>Phonebook Has Info For ${persons.length} people</h4>`
        + 
        `<p>${day[date.getDay()]} ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} 
        ${date.getHours()}:${date.getMinutes()} ${date.getHours() <= 11 ? "AM" : "PM"}
        </p>`
    )
    res.send(body)
})
app.get("/api/persons/:id", (req,res) => {
    const id = req.params.id
    const person = persons.find((n) => n.id === id)

    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("port running in ", PORT)
})