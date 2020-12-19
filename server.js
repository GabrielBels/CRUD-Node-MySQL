const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const empregadoRoutes = require('./src/routes/empregado.routes');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send("Welcome World!");
})

// Middleware
app.use('/empregados', empregadoRoutes);

app.listen(port, () => {
    console.log(`Server is listening in the port ${port}`);
})