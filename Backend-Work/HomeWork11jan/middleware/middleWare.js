const middleWare=((req,res,next)=>{
    console.log("middleWare Added");
    next();
});

module.exports= middleWare;