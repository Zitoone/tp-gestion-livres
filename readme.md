## API de Gestion de Livres

**Description**
Cette API RESTful permet de gérer une bibliothèque de livres avec des fonctionnalités de recherche avancées. Elle démontre l'utilisation d'index MongoDB et de requêtes complexes.

**Fonctionnalités**
Gestion complète des livres (CRUD)
Recherche par titre, auteur, ISBN
Gestion des stocks et disponibilité

**Structure du projet**
books-api/
├── models/
│   └── Book.js          # Modèle pour les livres
├── controllers/
│   └── bookController.js # Contrôleurs pour les opérations CRUD
├── routes/
│   └── books.js         # Routes pour les livres
├── app.js
├── server.js
└── package.json

​
**Endpoints de l'API**
 
GET /api/books Récupère tous les livres (avec filtres et pagination)
GET /api/books/:id Récupère un livre par ID
POST /api/books Crée un nouveau livre
PUT /api/books/:id Met à jour un livre
DELETE /api/books/:id Supprime un livre
GET /api/books/search?q=terme Recherche de livres

* Informations
Afin de gérer les paramètres qui passent directement dans l’URL avec `?`, dans le contrôleur il faut utiliser :
const { q } = req.query;
​
Exemple de données
```javascript
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "isbn": "978-0132350884",
  "genre": "Informatique",
  "publishedYear": 2008,
  "publisher": "Prentice Hall",
  "pages": 464,
  "language": "Anglais",
  "price": 45.99,
  "stock": 15,
  "available": true,
  "description": "Un guide pour écrire du code propre et maintenable"
}
```
