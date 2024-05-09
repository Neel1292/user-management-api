const pool = require('../db');
const bcrypt = require('bcrypt');
require('dotenv').config();

// const SALT = process.env.SALT_ROUNDS || 10;

// Get all the notes from the database
exports.getAllUser = async function(req, res) {
    try {
        const allNotes = await pool.query('SELECT * FROM users');
        res.json(allNotes.rows);
    } catch (error) {
        console.error(error.message);
    }
}

// Get One  notes from the database
exports.getOneUser = async function(req, res) {
    try {
        const { email, password } = req.body;
        const oneUser = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
        const user = oneUser.rows[0];
        const validPassword = await bcrypt.compare(password, user.user_password);

        if(!user) {
            console.log('User not found');
        }

        if(!validPassword) {
            console.error(new Error('Invalid password'));
        }

        res.status(201).send('Logged in Successfully');
        
    } catch (error) {
        console.error(error.message);
    }
}

// Post One entrie  in database
exports.createOneUser = async function(req, res) {
    try {
        const { user_name, user_email, user_password } = req.body;
        const hashPassword = await bcrypt.hash(user_password, 12); 
        const newUser = await pool.query('INSERT INTO users(user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', [user_name, user_email, hashPassword]);
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
}

// Post One entrie  in database
exports.updateOneUser = async function(req, res) {
    try {
        const { email } = req.params;
        const { newpassword } = req.body;
        const hashPassword = await bcrypt.hash(newpassword, 12);
        const updatePassword = await pool.query("UPDATE users SET user_password = $1 WHERE user_email = $2 RETURNING *", [ hashPassword, email]);

        if(updatePassword.rows[0]) {
            res.json("Password Update Successfully");
        }

    } catch (error) {
        console.error(error.message);
    }
}

// Delete a note
exports.deleteOneUser = async function(req, res) {
    try {
        const { email } = req.body;
        const deleteOneNote = await pool.query("DELETE FROM users WHERE user_email = $1;", [email]);

        res.send("Data Delete Successfully");
    } catch (error) {
        console.error(error);
    }
}