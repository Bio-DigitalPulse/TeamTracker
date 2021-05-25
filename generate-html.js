//function to write to html file
const fs = require('fs');

//write html file

function writePage (html) {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err){
            throw err
        }
        console.log("index.html Page generated")
        copyCSS()
    })
}

const copyCSS = () =>{
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err){
            throw err
        }
        console.log('style.css file copied')
    });
}

module.exports = writePage, copyCSS