const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {

    res.status(200).json({
        msg: 'congrats your server is up on the route registers'
    })
}
);

router.post('/',(req,res)=>{
    console.log(req.body);
    res.json({
        name:req.body.name
    })
})

module.exports=router;