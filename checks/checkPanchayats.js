const fs = require("fs");

const inputFile ="../files/panchayat.csv"


const data = fs.readFileSync(inputFile,"utf-8",(err)=>{

    if(err){
        console.log("err : ",err);
    }

    
})

const lines = data.trim().split("\n")
const panchayatCodeSet = new Set()
//let i =0
for (let line in lines){

    const columns = lines[line].split(",")
    const panchayatCode = columns[1].trim() // we put 1 here because the panchayat code is in the second place in the csv file.


    if(panchayatCodeSet.has(panchayatCode)){

        console.log("duplicate is : ",panchayatCode);
        //console.log(i++);
    }

    panchayatCodeSet.add(panchayatCode)


}
