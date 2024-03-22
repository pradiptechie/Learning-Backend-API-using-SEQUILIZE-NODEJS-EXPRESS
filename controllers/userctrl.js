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


const showUser = async(req, res) =>{
    res.status(200).json({data:1});

}

module.exports = {
    addUser,
    showUser
}