const fs = require('fs');

function createFile (html) {

    fs.writeFile('./dist/index.html', html, err => {

        if(err){

            throw err
        }

        console.log("Team HTML page generated.")
        cssFile()

    })
}

const cssFile = () =>{

    fs.copyFile('./src/style.css', './dist/style.css', err => {

        if (err){

            throw err
        }

        console.log('CSS file copied to generated HTML page.')

    });
}

module.exports = createFile, cssFile