const { prisma } = require("../prisma/prisma-client")
const bcrypt = require('bcryptjs')
const Jdenticon = require('jdenticon') //либа для аватаров
const path = require('path') // path lib
const fs = require('fs') // import file sys



//можно и функции писать, здесь представлен объект
const UserController = {

    register: async (req, res) =>{
        // This is for TEST 1: sending a string
        // res.send('register')
        //1:34:17, modified

        // This is for TEST 2 : sending form to server
        //in Postman, for post request select Body/x-www-form-urlencoded
                // const { email, password, name } = req.body;
                // console.log(email, password, name)
                // res.send('OK')

        const { email, password, name } = req.body;
        //проверка заполнения юзером всех полей в форме на сайте
        if(!email || !name || !password){
            return res.status(400).json({error: 'All the form fields are required to fill in'})         
        }
        try {
            //проверяем существование юзера в базе по эл почте
            //import prisma
            const existingUser = await prisma.user.findUnique(({where: {email}}))

            if(existingUser){
                return res.status(400).json({error: 'The user exists in the DB already'})         
            }
        //1:43:00 hashing password
        const hashedPassword = await bcrypt.hash(password, 10)

        // создание картинки аватара
        const png = Jdenticon.toPng(name, 200)//имя аватара и размер 200 на 200
        //название
        const avatarName = `${name}_${Date.now()}.png`; // имя и дата
        // path lib
        const avatarPath = path.join(__dirname, '../uploads', avatarName)
        fs.writeFileSync(avatarPath, png) //жди пока не запишешь файл
     // передаем Path и саму картинку

    // в БД создаем юзера
        const user = await prisma.user.create({
            data:{
                email, 
                password: hashedPassword, 
                name,
                avatarUrl: `/uploads/${avatarPath}`
            }
        })

        res.json(user)// отвечаем этим юзером

        } catch (error) {
            
            console.log('Error in register', error)
            // пишем для себя ошибку
            res.status(500).json({error: 'Internal server error'})
            //response to user 
        }
/*
    создание юзера по ссыоке register: 1:45:36
*/

    },
    login: async (req, res) =>{
        res.send('login ')
    },
    getUserById: async (req, res) =>{
        res.send('getUserById')
    },
    updateUser: async (req, res) =>{
        res.send('updateUser ')
    }, 
    current: (req, res) =>{
        res.send('current ')
    }

};

module.exports = UserController;



