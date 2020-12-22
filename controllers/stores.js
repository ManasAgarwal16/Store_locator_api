const Store = require('../models/Store');

exports.getStores = async(req,res)=>{
    try{
        const stores = await Store.find();

        return res.status(200).json({
            success:true,
            count: stores.length,
            data:stores
        });
    }catch(err)   
    {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
};


exports.addStore = async(req,res)=>{
    try{
        const store = await Store.create(req.body);//collection

        return res.status(200).json({
            success:true,
            data:store
        })
    }catch(err)   
    {
        console.error(err);
        if(err.code === 11000)
        {
            return res.status(400).json({error: 'This store already exists'});
        }
        res.status(500).json({error: 'Server error'});
    }
};