const db = require('../models/index');
const User = db.User;

// const addUser = async (req, res)=>{ //using build and save
//     const data = User.build({ firstName: "Ram", lastName: "Singh" });
//     console.log(data instanceof User);

//     await data.save();
//     console.log('Data was saved to the database!');

//     console.log(data.toJSON());
//     res.status(200).json(data.toJSON());
// }

// ..............................................
// const addUser = async (req, res)=>{ //using create

//     const data = await User.create({ firstName: "Ram", lastName: "Singh" });
//     console.log(data instanceof User); // true

//     console.log(data.toJSON());
//     res.status(200).json(data.toJSON());
// }

// .............................................
const addUser = async (req, res)=>{ //updating instance
    
    const data = await User.create({ firstName: "Ram", lastName: "Singh" });
    console.log(data instanceof User); // true

    // // update using set
    // data.set({ firstName: "Shyam", lastName: "Singh" });
    // await data.save();

    data.update({ firstName: "Shyam", lastName: "Singh" });
    await data.save();

    // // reload
    // await data.reload();

    // //remove
    // await data.destroy();


    console.log(data.toJSON());
    res.status(200).json(data.toJSON());
}


const showUsers = async(req, res) =>{
    const data = await User.findAll({});
    console.log(data instanceof User);
    res.status(200).json({data:data});
}

const showUser = async(req, res) =>{
    const data = await User.findOne({
        where:{
            id:req.params.id
        }
    });
    console.log(data instanceof User);
    res.status(200).json({data:data});
}

const postUser = async(req,res)=>{
    const postData = req.body;
    if(postData.length>1){
        var data = await User.bulkCreate(postData);

    }else{
        var data = await User.create(postData);

    }
    // console.log(data);
    res.status(200).json({data:data});
}

const delUser = async(req, res) =>{
    const data = await User.destroy({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({data:data});
}

const updateUser = async(req, res) =>{
    const updateData = req.body;
    const data = await User.update(updateData,{
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({data:data});
}


module.exports = {
    addUser,
    showUsers,
    showUser,
    postUser,
    delUser,
    updateUser
}