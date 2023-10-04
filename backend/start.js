require('dotenv').config();
const app = require('./server');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Conectado')
    })
    .catch(e => console.log(e));
const port = process.env.PORT || 3000;
app.on('Conectado', () => {
    app.listen(port, () => {
        console.log(`Acessar http://localhost:${port}`);
        console.log(`Servidor executando na porta ${port}`);
    });
});