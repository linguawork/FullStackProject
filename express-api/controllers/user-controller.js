//можно и функции писать, здесь представлен объект

const UserController = {

    register: async (req, res) =>{
        res.send('register')
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
