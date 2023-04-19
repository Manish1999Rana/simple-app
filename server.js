const fs = require('fs');

const writeAndAppend = () => {
    fs.writeFileSync("notepad.txt", "My name is Manish, and I am a student");
}

module.exports = writeAndAppend;