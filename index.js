const express = require('express');
const cors = require('cors');
const app = express();
const usercontroller = require('./controller/userController');

//MIDDLEWARE
app.use(express.json())
app.use(cors());

// Routes
app.get('/users', usercontroller.getAllUser);
app.post('/create/user', usercontroller.createOneUser);
app.get('/user/login', usercontroller.getOneUser);
app.put('/update/:email', usercontroller.updateOneUser);
app.delete('/delete/user', usercontroller.deleteOneUser);

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})