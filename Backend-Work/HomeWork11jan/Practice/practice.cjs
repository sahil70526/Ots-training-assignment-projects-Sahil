// const fs = require('fs');
console.log(__dirname);
const pathName = `${__dirname}/file.text`



// fs.writeFileSync(pathName,"this is demo text file.",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// // appending data to the file structre

// fs.appendFile(pathName,'We are going to append some content into oue file',(err,data)=>{
//     if(err) throw err ;
// })

// fs.readFile(pathName, (readFileErr, data) => {

//     if (readFileErr) throw readFileErr;
//        console.log(data.toString());
//     //   fs.unlink(pathName, unlinkErr => {

//     //     if (unlinkErr) throw unlinkErr;
//     //   });
// });