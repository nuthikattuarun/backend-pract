const express=require('express');
const router= express.Router();

const{createaccount,
    Readaccount,
    singleuser,
    updateaccount,
    deleteaccount}=require('../controllers/accountController');

router.post('/account/api',createaccount);
router.get('/account/api',Readaccount);
router.get('/account/api/:id',singleuser);
router.put('/account/api/:id',updateaccount);
router.delete('/account/api/:id',deleteaccount)

module.exports = router;