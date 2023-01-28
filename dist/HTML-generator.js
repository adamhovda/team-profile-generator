const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


// const objToArr = (employeeArr) => {
// employeeArr.forEach(element => {
//     const employeeArrInfo = Object.values(element)
//     console.log(employeeArrInfo)

            

// return employeeArrInfo
    


// }
// )}



const generateHtml = (objectString) => {

    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <container>
    ${objectString}
    </container>
</body>
</html>
    
    
    
    `


    }
        

    // fs.writeFile(`myTeam.html`, generateHtml(employeeList), (err) =>
    //         err ? console.log(err) : console.log('README created successfully!')
    //         );

        // console.log(`HTML File ${element.name} & ${element.id}`)

 



module.exports = generateHtml;
// module.exports = objToArr;