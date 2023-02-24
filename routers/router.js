const express=require('express');
const BookControllers = require('./../Controllers/BookControllers');
const router=express.Router();

router.get('/api/books',BookControllers.GetAll)

router.get('/api/books/:id',BookControllers.GetOne)

router.post('/api/books',BookControllers.Add)

router.put('/api/books/:id',BookControllers.Update)

router.delete('/api/books/:id',BookControllers.Delete)

module.exports = router;
