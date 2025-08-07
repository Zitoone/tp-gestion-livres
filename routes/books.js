const express=require('express')
/* const book = require('../models/book') */
const router= express()
const bookController=require('../controllers/bookController')

/* router.get('/', bookController.getAllBooks) */
router.post('/', bookController.createNewBook)
router.get('/', bookController.getBooks)
router.get('/:id', bookController.getBookById)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)





module.exports=router

/*GET	/api/books	Récupère tous les livres (avec filtres et pagination)
GET	/api/books/:id	Récupère un livre par ID
POST	/api/books	Crée un nouveau livre
PUT	/api/books/:id	Met à jour un livre
DELETE	/api/books/:id	Supprime un livre
GET	/api/books/search?q=terme	Recherche de livres*/