class CrudFirebase{
    constructor(db, collectionName) {
      this.query = db.collection(collectionName);
    }
  
    async findAll() {
   
    }
  
    async create(data) {

    }
  
    async findById(id) {
      
    }
  
    async update(id, data) {
    
    }
    async remove(id) {
    
    
    }


  }
  
  module.exports = CrudFirebase