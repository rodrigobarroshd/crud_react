POST http://localhost:3000/api/services
Content-Type: application/json

{
    "name": "Algum serviçosd",
    "description": "asd",
    "price": 1500,
    "image": "https://www.mktesportivo.com/wp-content/uploads/2022/09/ec-bahia-city-football-group-1170x658-1-590x332-1.jpg"
}

###
GET http://localhost:3000/api/services/


###
GET http://localhost:3000/api/services/644d9ab04ff8bde694c40db5

###
DELETE http://localhost:3000/api/services/644e76f2fdee1ff375d4dde6

###
PUT http://localhost:3000/api/services/644d9ab04ff8bde694c40db5


###
PUT http://localhost:3000/api/services/644d9ab04ff8bde694c40db5
Content-Type: application/json

{
    "name": "Teste",
    "description": "as",
    "price": 12500,
    "image": "https://www.mktesportivo.com/wp-content/uploads/2022/09/ec-bahia-city-football-group-1170x658-1-590x332-1.jpg"
}


###
POST http://localhost:3000/api/parties
Content-Type: application/json

{
    "title": "Meu Evento3",
    "author": "Rodrigo",
    "description": "uma festa de aniversario",
    "budget": 78000,
    "image": "https://www.mktesportivo.com/wp-content/uploads/2022/09/ec-bahia-city-football-group-1170x658-1-590x332-1.jpg",
    "services": [
        {
            "name": "Teste 1",
            "description": "as",
            "price": 7500,
            "image": "https://www.mktesportivo.com/wp-content/uploads/2022/09/ec-bahia-city-football-group-1170x658-1-590x332-1.jpg"
        },
        {
            "name": "Teste 2",
            "description": "as",
            "price": 2500,
            "image": "https://www.mktesportivo.com/wp-content/uploads/2022/09/ec-bahia-city-football-group-1170x658-1-590x332-1.jpg"
        }
    ]
}


###

GET http://localhost:3000/api/parties

###

GET http://localhost:3000/api/parties/644ea94ee77bc7bcde4c6664

###

DELETE http://localhost:3000/api/parties/644ea94ee77bc7bcde4c6661