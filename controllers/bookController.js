const Books=require('../models/book')
const { put } = require('../routes/books')



exports.getAllBooks=async(req,res)=>{
    try{
        const books=await Books.find()
        res.json(books)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

//fonction pour récupérer les livres avec pagination
exports.getBooks=async(req,res,next)=>{
    try{
    const{page=1,limit=10}=req.query

    const books=await Books.find({...req.quey})
    .limit(limit*1)
    .skip((page-1)*limit)
    .sort({publishedYear:1})

    const count=await Books.countDocuments();
    return res.status(200).json({
        books,
        totalPages: Math.ceil(count/limit),
        currentPage: page
    })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


exports.getBooks = async (req, res) => {
    try {
        const { q } = req.query;
        const regex = new RegExp(q, 'i') // insensible à la casse

        const books = await Books.find({
            $or: [
                { title: regex },
                { author: regex },
                { description: regex },
                { isbn: regex },
            ]
        });
        return res.status(200).json({books})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};


exports.createNewBook=async(req,res)=>{
        const {title, author, isbn, genre, publishedYear, publisher, pages, language, price, stock, available, description}=req.body
    try{
        const book =await Books.findOne({$or: [{title}, {author}, {publishedYear}]})
        if(book) res.status(200).json({message: "Ce livre existe déjà"})
        
        const newBook=new Books({title, author, isbn, genre, publishedYear, publisher, pages, language, price, stock, available, description})
        await newBook.save()
        res.status(201).json({message: "Livre crée avec succès"})
    }catch(err){
        res.status(500).json({message: err.message})
    }    
}

exports.getBookById=async(req,res)=>{
    try{
        const book=await Books.findById(req.params.id)
        if (book == null){
            res.status(404).json({message: "Livre non trouvé"})
        }
        res.json(book)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.updateBook=async(req,res)=>{
    try{
        const book=await Books.findById(req.params.id)
        if(book==null){
            res.status(404).json({message: "Livre non trouvé"})
        }
        if(req.body.title != null){
            book.title=req.body.title
        }
        if(req.body.author != null){
            book.author=req.body.author
        }
        if(req.body.isbn != null){
            book.isbn=req.body.isbn
        }
        if(req.body.genre != null){
            book.genre=req.body.genre
        }
        if(req.body.publishedYear != null){
            book.publishedYear=req.body.publishedYear
        }
        if(req.body.publisher != null){
            book.publisher=req.body.publisher
        }
        if(req.body.pages != null){
            book.pages=req.body.pages
        }
        if(req.body.language != null){
            book.language=req.body.language
        }
        if(req.body.price != null){
            book.price=req.body.price
        }
        if(req.body.stock != null){
            book.stock=req.body.stock
        }
        if(req.body.available != null){
            book.available=req.body.available
        }
        if(req.body.description != null){
            book.description=req.body.description
        }
        const updateBook=await book.save()
        res.json(updateBook)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteBook=async(req,res)=>{
    try{
        const book=await Books.findById(req.params.id)
        if(book==null){
            res.status(404).json({message: "Livre non trouvé"})
        }
        await book.deleteOne(
            res.json({message: "Le livre a été supprimé"})
        )
    }catch(err){
        res.status(500).json({message: err.message})
    }
}