const http = require('./src/app');

http.listen(process.env.PORT || 3000, () => {
    console.log('Servidor en el puerto 3000')
})