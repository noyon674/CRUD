//import files
require('dotenv').config();
const App = require('./App');


//server port
const port = process.env.port;

//server run
App.listen(port, ()=>{
    console.log(`server is running: http://localhost:${port}`);
})