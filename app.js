const express = require('express');
const app = express();
const recipeRouter = require('./Routes/recipe');
const db = require('./db');

const port = process.env.PORT || 5000;

app.use(express.json());
db.connect();

app.use('/api/recipes', recipeRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));


// app.get('/express_backend', (req, res) => { 
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
// });