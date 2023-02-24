const express = require('express');
const app= express();
const PORT=4000;
const router  = require('./routers/router');

app.use(express.json());
app.use(router)     

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})