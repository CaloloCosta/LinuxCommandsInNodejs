/*
  linux cat command in nodejs. Using the fs-file system module
  v 1.0.0 : only has the basic action of showing the info of a file
  functionanlity: shows contents of a file
  how to run: node cat filename
  accept has attribute: -b -n --help
  type node cat --help for help
*/
// get the file filename
const fileName = process.argv[2];
const att = process.argv[3];
// open the file
let {readFile} = require("fs");
readFile(fileName,"utf8",(error, response) =>{
  if(error){
    console.log("cat: file: No such file or directory");
  }
  else {
    if(att != null){
      if(att == '-b' || att == '-n'){
        let w = '';
	let l=0;
        for(let i = 0; i < response.length; i++){
		
          if(response[i] != '\n'){
	    w += response[i];
          }
          else {
            console.log(`${l+1} ${w}`);
	    w = '';
            l++;
          }

        }
      }

    }
    else
      console.log(response);
  }
});
