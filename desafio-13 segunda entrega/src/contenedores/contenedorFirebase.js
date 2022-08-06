class CrudFirebase{
    constructor(db, collectionName) {
      this.query = db.collection(collectionName);
    }
  
    async findAll() {
      let data = await this.query.get()
      let docs = data.docs;
      let resultado  = docs.map(
        (doc)=>({
          id:doc.id,
          ...doc.data()
        }
        )
      )
      return resultado
    }
  
    async create(data) {
      console.log('creando')
      let doc = await this.query.doc()
    
      let resultado = await doc.create(data)

      console.log(doc.id)
      return resultado
      
    }
  
    async findById(id) {
      let doc = this.query.doc(`${id}`);
      let data = await doc.get();
      let dataWithId= {id:data.id, ...data.data()}
      return dataWithId
    }
  
    async update(id, data) {
    
    }
    async remove(id) {
    
    
    }


  }
  
  module.exports = CrudFirebase