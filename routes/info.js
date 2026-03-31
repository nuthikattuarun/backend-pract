const express=require("express")
const router = require.Router();

router.get("/info", (req, res) => {
    res.json({
       message:"Account CRUD operations is running",
       status:successs
    });

});

module.exports = router;