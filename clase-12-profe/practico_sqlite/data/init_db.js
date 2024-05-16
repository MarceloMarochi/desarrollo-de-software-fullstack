import * as sqlite3 from 'sqlite3'

 const db = new sqlite3.default.Database('./data/my_db.sqlite', sqlite3.OPEN_READWRITE, (error)=>{
    if(error)
        console.log('Ha ocurrido un error: ' + error.message)
})

export default db