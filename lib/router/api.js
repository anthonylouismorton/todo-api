'use strict';

const express = require('express');
const Item = require('../model/Item.js')
const apiRouter = express.Router();

apiRouter.post('/api/test', (req, res, next) => {
  res.status(200).send('Partner, it\'s a work in progress.');
});

apiRouter.post('/toDO', async (req, res, next) => {
  console.log(req)
  console.log('getting it')
  // try{
  //   const newItem = await Item.create({

  //   })
  //   res.status(200).send('Partner, it\'s a work in progress.');
  // }
  // catch(e){
  //   console.log(e)
  // }

});


module.exports = apiRouter;
