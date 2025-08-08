const express=require('express')
/* const book = require('../models/book') */
const router= express()
const bookController=require('../controllers/bookController')

router.get('/', bookController.getAllBooks)
router.get("/search", bookController.getBooks);
router.post('/', bookController.createNewBook)
router.get('/:id', bookController.getBookById)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)



module.exports=router
