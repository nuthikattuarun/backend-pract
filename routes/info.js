const express=require("express")
const router = require.Router();

router.get("/info", (req,res) => {
    res.json({
        name:"Arun",
        role:"Backend Developer",
        status:"Learning"
    });

});

module.exports = router;