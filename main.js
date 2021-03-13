const fs = require('fs');
const settings = require('./settings.json');

fs.watchFile(settings.journalFilepath, (a) => {
    console.log(a); // logs file stats, I don't want this
    try {
        let journal = ((fs.readFileSync(settings.journalFilepath)).toString()).split(`\r\n`); // ugly
        console.log(journal[journal.length - 2]); // last line is blank
    }
    catch(err) {
        console.error(err);
    }
    // get journal event type
    // do HUE stuff if there's HUE stuff to do with it 
});
