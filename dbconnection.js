let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/parcel_systems');

module.exports = mongoose;