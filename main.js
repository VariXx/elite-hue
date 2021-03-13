const fs = require('fs');
const filepath = `./test.txt`;

fs.watchFile(filepath, (a) => {
    // console.log(a); // logs file stats, I don't want this
    let newFile = ((fs.readFileSync(filepath)).toString()).split(`\n`); // ugly
    console.log(newFile);
    // get last line of newFile array for newest line then do HUE stuff

    // this works, it's a little slow. Check if the elite journal file uses \n or \r for newlines. You might have to change the split. 
    
});

