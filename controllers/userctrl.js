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
    try {
        const data = await User.create({ firstName: "Ram", lastName: "Singh" });
        console.log(data instanceof User); // true
    
        // // update using set
        // data.set({ firstName: "Shyam", lastName: "Singh" });
        // await data.save();
    
        // data.update({ firstName: "Shyam", lastName: "Singh" });
        // await data.save();
    
        // // reload
        // await data.reload();
    
        // //remove
        // await data.destroy();
    
        console.log(data.toJSON());
        res.status(200).json(data.toJSON());
        
    } catch (error) {
        if (error.errors && error.errors.length > 0) {
            console.log(error.errors);
            res.status(200).json(error.errors.map(err => err.message));
        } else {
            console.error("Error:", error);
            res.status(500).json("An error occurred while processing your request.");
        }
    }
}


const showUsers = async(req, res) =>{
    try {
        const data = await User.findAll({});

        // const data = await User.findAll({ //SELECT id, lastName FROM User
        //     attributes: ['id', 'lastName']
        // });

        // const data = await User.findAll({ //Exclude selected field
        //     attributes:{ exclude:['id', 'lastName']}
        // });

        // const data = await User.findAll({ //selsct id as ID, and lastname
        //     attributes: [['id', 'ID'], 'lastName']
        // });


        console.log(data instanceof User);
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error.errors);
        res.status(200).json(error.errors[0].message);
    }

}

const showUser = async(req, res) =>{
    try {
        const data = await User.findOne({
            where:{
                id:req.params.id
            }
        });
        console.log(data instanceof User);
    
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error.errors);
        res.status(200).json(error.errors[0].message);
    }
}

const postUser = async(req,res)=>{
    try {
        const postData = req.body;
        if(postData.length>1){
            var data = await User.bulkCreate(postData);
    
        }else{
            data = await User.create(postData);
    
        }
        // console.log(data);
        res.status(200).json(data);
        
    } catch (error) {
        if (error.errors && error.errors.length > 0) {
            console.log(error.errors);
            res.status(200).json(error.errors.map(err => err.message));
        } else {
            console.error("Error:", error);
            res.status(500).json("An error occurred while processing your request.");
        }
    }
}

const delUser = async(req, res) =>{ //delete where condition
    try {
        const data = await User.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({status:data});
        
    } catch (error) {
        console.log(error.errors);
        res.status(200).json(error.errors);
    }
}

const delUsers = async(req, res) =>{ //delete all
    try {
        await User.destroy({
            truncate: true 
        });
        res.status(200).json('All users deleted successfully.');
        
    } catch (error) {
        console.log('Error deleting users:', error);
        res.status(200).json('Error deleting users:', error);
    }
}

const updateUser = async(req, res) =>{
    try {
        const updateData = req.body;
        const data = await User.update(updateData,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({status:data});
        
    } catch (error) {
        console.log('Error updating user:', error);
        res.status(200).json('Error updating user:', error);
    }
}

const valUser = async(req, res) =>{
    try {
        // const data = await User.create({ firstName: "123", lastName: "Singh" }); 
        const postData = req.body;
        const data = await User.create(postData);
        console.log(data instanceof User);

        console.log(data.toJSON());
        res.status(200).json(data.toJSON());
        
    } catch (error) {
        if (error.errors && error.errors.length > 0) {
            console.log(error.errors);
            res.status(200).json(error.errors.map(err => err.message));
        } else {
            console.error("Error:", error);
            res.status(500).json("An error occurred while processing your request.");
        }
    }
}

module.exports = {
    addUser,
    showUsers,
    showUser,
    postUser,
    delUser,
    delUsers,
    updateUser,
    valUser
}