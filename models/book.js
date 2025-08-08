const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Le titre est requis"]        
    },
    author:{
        type: String,
        required:[true, "Le nom de l'auteur est requis"]        
    },
    isbn:{
        type: String,
        required:[true, "L'ISBN est requis"],
        match:[/^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/, "Veuillez entrer un ISBN valide"]        
    },
    genre:{
        type: String,
        required:[true, "Le genre est requis"]        
    },
    publishedYear:{
        type: Number,
        required:[true, "L'année de publication est requise"]
    },
    publisher:{
        type: String,
        required:[true, "L'éditeur est requis"]        
    },
    pages:{
        type: Number,
        required:[true, "Le nombre de page est requis"]
    },
    language:{
        type: String,
        required:[true, "La langue du livre est requise"]
    },
    price:{
        type: Number,
        required:[true, "Le prix est requis"]
    },
    stock:{
        type: Number,
        required:[true, "Le stock est requis"]
    },
    available:{
        type: Boolean,
        default: true
    },
    description: String
})
//Index qui ne servent à rien
bookSchema.index({title: 1, description: 1})

module.exports=mongoose.model("Book", bookSchema)