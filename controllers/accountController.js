const account=require('../Models/accountModels');

//CREATE
exports.createaccount= async(req,res)=>{
try{
    const newAccount = await account.create(req.body)

    res.status(201).json({
      message:"account created sucessfully",
      data:newAccount
    })
}catch(err){
    res.status(500).json({
        error:err.message
    })
}
}

//Read All
 exports.Readaccount = async (req,res)=>{
 try{
    const newAccount = await account.find();
    
    res.status(200).json({
        message:'all account details',
        data:newAccount
    });
}catch(err){
    res.status(500).json({
        error:err.message
    });
}
};

//Read single
exports.singleuser = async (req,res)=>{
 try{
    const newAccount = await account.findById(req.params.id);
    
    res.status(200).json({
        message:'single user',
        data:newAccount
    });
}catch(err){
    res.status(500).json({
        error:err.message
    });
}
}

//update
exports.updateaccount = async(req,res)=>{
    try{
        const newAccount = await account.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            message:'updated suceccfully',
            data:newAccount
        })
}catch (err){
    res.status(500).json({
        error:err.message
    })
}

 }

 //Delete
 exports.deleteaccount=async (req,res)=>{
     try{
         const newAccount = await account.findByIdAndDelete(req.params.id);
         res.status(200).json({
             message:"deleted sucessfully",
             data:newAccount
         });
 }catch (err){
     res.status(500).json({
         error:err.message
     });
 }
 }