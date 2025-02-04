//routes
//это для отправки

const express = require('express');
const router = express.Router();

/*
    32-17 установка пакета npm multer
    middleware for handling multipart/form-data 
    (commonly used for file uploads) in Node.js applications
*/
const multer = require('multer')
//загружать в папку Uploads
const uploadDestination = 'uploads'


//Показываем, где хранить файлы с помощью multer
const storage  = multer.diskStorage({
    //path
    destination: uploadDestination,
    /*
        different types of files
        A function that determines the name 
        of the uploaded file. 
        If nothing is passed, 
        Multer will generate a 32 character pseudorandom 
        hex string with no extension.
    */
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
})

const uploads = multer({storage:storage})



router.get('/register', (req, res) => {
    //пишем пока ответ 21:30
    res.send('register');
});

module.exports = router;


