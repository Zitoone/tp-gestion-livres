const express=require('express')
const app=express()
require('dotenv').config()
const port=process.env.PORT
/* const Books=require('../models/book') */

require('./db')

app.use(express.json())

//routes
const booksRoutes=require('./routes/books')
app.use('/api/books', booksRoutes)

app.get('/', (req,res)=>{
    res.send("RAS")
})

/* app.get('/api/books/search?q=terme', (req,res)=>{
    const terme= req.query.terme
    const books_result=Books.filter(book.includes(terme))
    if(books_result.length<1){
        return res.status(200).send('Aucun livre avec ce terme')
    }
    res.json(books_result)
}) */

/*     app.get('/search', (req,res)=>{
        const { q } = req.query;
        res.send
    }) */

app.listen(port, ()=>console.log('Serveur démarré sur http://localhost:3000'))