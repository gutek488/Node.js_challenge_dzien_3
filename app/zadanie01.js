const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const crypto = require('crypto');
let passwords = ['??TegoHasła','CodersLab','Node.js Szyfruje Pliki','Zaźółć Gęślą Jaźń','Moje Haslo 1@3!','111#$((@)n','Dzisiaj Szyfruje 83'];
let algorithms = ['sha256', 'sha512','md5','rmd160'];

//function decodeText(encodedText, password, algorithm){
//     const decipher = crypto.createDecipher(algorithm, password);
//     let decrypted = decipher.update(encodedText, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }
//
//
// for (let i = 0; i < passwords.length ; i++) {
//      for (let j = 0; j < algorithms.length ; j++) {
//          console.log(decodeText(MY_PWD_HASH, passwords[i], algorithms[i]));
//      }
// }


passwords.forEach(password => {
    algorithms.forEach(algorithm => {
        const hash = crypto.createHmac(algorithm, password)
            .digest('hex');
        if(hash === MY_PWD_HASH) {
            console.log(password, algorithm, hash);
        }
    })
});