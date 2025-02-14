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
