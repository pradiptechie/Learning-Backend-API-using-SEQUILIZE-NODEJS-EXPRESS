const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')

// require('./models/index')

// const User = require('./models/users');
// const Contact = require('./models/contact');

// const sequelize = require('./models/index');


require('./models/index')

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const userCtrl = require('./controllers/userctrl');

app.get('/adduser', userCtrl.addUser);
app.get('/showuser', userCtrl.showUser);
  


// User.sync({ force: true });
// Contact.sync({ force: true });
// User.sync({ alter: true });
// User.sync();

// sync all tables
// sequelize.sync({ alter: true });


// User.drop();
// sequelize.drop();


// This will run .sync() only if database name ends with '_test'
// sequelize.sync({ force: true, match: /test$/ });




app.listen(port, () => {
  console.log(`RUNNING ON PORT: ${port}\n.................................\n`)
})