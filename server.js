const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const path = require('path');

const usersRoute = require('./routes/user.routes');
const teachersRoute = require('./routes/teacher.routes');
const classRoute = require('./routes/class.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoute)
app.use('/teachers', teachersRoute)
app.use('/class', classRoute)

app.get('http://localhost:8000/users', (req,res)=>{
    const user = 'Netta';
    res.json(user);
})

mongoose.connect('mongodb://localhost/classes', {
//mongoose.connect('mongodb+srv://nettalee19:dM_HqsyqT9K8LK.@cluster0.u9jns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("database connected")
})

const port = 8000;

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
    
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


//const Tasks = require('./models/class.models')
const teachers = require('./models/teachers.models')

const main = async () =>{
    // const task = await Tasks.findById('609125a82d5c91357812a0fd')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await teachers.findById('60912525daf86e5674a8dbab')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()


app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
