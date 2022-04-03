fs = require('fs')

function lcdir(name){
    return new Promise((resolve, reject)=>{
        if(fs.existsSync('C:/Users/18019/Desktop/node.js/Yuan_Projet/Stage_bdd/stage/stagefile/'+name)){
            resolve("directory already exist")
        }else{
            fs.mkdir('C:/Users/18019/Desktop/node.js/Yuan_Projet/Stage_bdd/stage/stagefile/'+name,(err)=>{
                if(!err){
                    resolve("make directory success")
                }else{
                    reject(err)
                }
            })
        }
    })
}
module.exports = lcdir
