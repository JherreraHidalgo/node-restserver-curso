//=============================
// puerto
//===========================

process.env.PORT = process.env.PORT  || 3000;



//=============================
// entorno
//===========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'




//=============================
// entorno
//===========================

let urlDB;

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {

    urlDB = 'mongodb+srv://LordHerrera:tMNOihn1KJ7akrec@cluster0-jfirq.mongodb.net/cafe'
}

process.env.URLDB = urlDB;








