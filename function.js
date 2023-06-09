const fs = require('fs');
const readWriteFile = (req, res) =>{
    // read file
    fs.readFile('public/raw_data.txt', 'utf8', function(err, data) {
        // if have any error
        if (err) throw err;
        // prepare data
        const toArray = Object(data.split('{'));
        let arrData = [];
        toArray.map(data=>{
          if(data.slice(0, 2) === "TA"){
            arrData.push(data.slice(3,-1));
          }else if(data.slice(0, 2) === "UA"){
            arrData.push(data.slice(3,-1));
          }
        });
        // convert array to string
        const toString = String(arrData);
        const regex = /,/gi;
        // follow structure result
        const result = toString.replace(regex, ';');
        // write file
        fs.writeFile('public/format_data.txt', result, err => {
          // if have any error will return 
        if (err) {
          console.error(err)
          return;
        }

        // respone success
        res.send({message: "write file successfully"});
      });
    });
}
module.exports = readWriteFile;