const express = require('express');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

const con = mysql.createConnection({

    host:'localhost',
    port:'3306',
    user:'99names_admin',
    password:'umbreen',
    database:'99names'

});

const port = 5000;

app.listen(port, () => console.log('Server started on ' + port));

con.connect(function(error){
    if(error) console.log(error);
    else console.log("Database connected");
});

app.get('/grid', (req, res) => {
    con.query('SELECT * FROM images ORDER BY image_id ASC', function(error, rows, fields){
        if(error) throw error;

        else {
            console.log(rows);
            res.send(rows);
        }
    });
});

app.get('/name', (req, res) => {
    con.query('SELECT * FROM pages_data', function(error, rows, fields){
        if(error) throw error;
        
        else {
            console.log(rows);
            res.send(rows);
        }
    });
});

app.get('/name/:id', (req, res) => {
    
    let page_id = req.params.id;

    if (!page_id) {
        return res.status(400).send({ error: true, message: 'Please provide task_id' });
    }

    con.query('SELECT * FROM pages_data WHERE pages_data.page_id = ?', page_id, function(error, rows, fields){
        if(error) throw error;
        
        else {
            console.log(rows);
            res.send(rows);
        }
    });
});