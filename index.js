
const express = require("express");
const app = express();
const router = express.Router();
const rwfRouter= require("./function.js")

//config json respone
app.use(express.json());
 
router.get('/', rwfRouter)
 
app.use(router);
//Port
const port = 3000;

// creates a listener on the specified port 300
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})