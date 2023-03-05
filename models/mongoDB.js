const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  Date: {
    type: 'Date',
    required: true,
  },
  Content: {
    type: 'String',
    required: true,
  }
});


const DataModel = mongoose.model('today-dones', Schema);


module.exports = DataModel;