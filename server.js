const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res)=>{
    res.send("Hello nodeJS sena 2023 mañana 01-12-2023");
})
app.listen(PORT,()=> console.log(`Servidor corriendo en puerto ${PORT}`));