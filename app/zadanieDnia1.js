
const fs = require('fs');
const crypto = require('crypto');


fs.readFile(`${process.argv[2]}`,"utf8", (err,data) => {
    if (err === null) {
        let hash = crypto.createHmac('sha256', data).digest("hex");
        console.log(hash);
        return hash;


    } else {
        console.log("Błąd przy odczycie pliku", err)
    }
});


