const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
const bodyParser = require('body-parser');
const port = 5001; 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}
// ROUTES  - will eventually update with Router. 

// post CREATE todo
app.post('/todos', async(req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message); 
        res.end(); 
    }
});
// get all todos to list READ 
app.get('/todos', async(req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.status(200).json(allTodos.rows); 
    } catch (err) {
        console.error(err.message); 
        res.end(); 
    }
});
// get a todo single READ 
app.get('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]); 
    } catch (err) {
        console.error(err.message); 
        res.end(); 
    }
});

// update PUT todo
app.put('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $1', [description,id]); 
    } catch (err) {
        console.error(err.message); 
        res.end(); 
    }
});

// Delete a todo
app.delete('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]); 
        res.status(200).json('todo was deleted')
    } catch (err) {
        console.error(err.message);
        res.end();
    }
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
    res.status(200); 
})