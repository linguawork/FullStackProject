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
            const existingUser = await prisma.user.findUnique(({where: {email}}))

            if(existingUser){
                return res.status(400).json({error: 'The user exists in the DB already'})         
            }

        } catch (error) {
            
        }


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
