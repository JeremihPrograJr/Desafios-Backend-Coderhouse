
const mongoose = require('mongoose');


class MongoCRUD {

    constructor(collection,schema) {
        this.model = mongoose.model(collection, schema);
    }

 
    getModel() {
        return this.model;
    }

 
    async create(data) {
        return this.model.create(data);
    }


    async findById(id) {
        return this.model.findById(id);
    }


    findAll() {
        return this.model.find({});
    }


    update(id, toUpdate) {
        return this.model.findByIdAndUpdate(id, toUpdate);
    }

 
     remove(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = MongoCRUD;