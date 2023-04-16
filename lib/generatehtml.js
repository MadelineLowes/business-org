const fs = require('fs');

function writeToHTML(employeeList) {
    const createHTML = generateHTML(employeeList);
    fs.writeFile('index.html', createHTML, (err) =>
    // let user know if there was an error or if the file was created successfully
        err ? console.log(err) : console.log('\nindex.html was created successfully\n')
    );
}

function generateHTML(employeeList) {
    // create the HTML template
    let starterHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-US-Compatible" content="IE=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <div class="container-fluid col-12 d-flex justify-content-center">
            <header class="team-heading">
                <h1 class="text-center">My Team </h1>
            </header>
        </div>
        <main class="team-area col-12 d-flex justify-content-center">`;
        // iterate through employeeList array and add each employee to the HTML
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].role === 'Manager') {
            starterHTML += `
            <card class="card employee-card">
                <div class="card-header">
                    <h2>${employeeList[i].firstName}</h2>
                    <h3>${employeeList[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employeeList[i].id}</li>
                        <li class="list-group-item"><a href=`mailto:${employeeList[i].email}`>Email: ${employeeList[i].email}</a></li>
                        <li class="list-group-item">Office Number: ${employeeList[i].officeNumber}</li>
                    </ul>
                </div>
            </card>
            `;
        } else if (employeeList[i].role === 'Engineer') {
            starterHTML += `
    <card class="card employee-card">
        <div class="card-header">
            <h2>${employeeList[i].firstName}</h2>
            <h3>${employeeList[i].role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employeeList[i].id}</li>
                <li class="list-group-item"><a href=`mailto:${employeeList[i].email}`>Email: ${employeeList[i].email}</a></li>
                <li class="list-group-item">GitHub: ${employeeList[i].github}</li>
            </ul>
        </div>
    </card>
            `;
        } else if (employeeList[i].role === 'Intern') {
            starterHTML += `
    <card class="card employee-card">
        <div class="card-header">
            <h2>${employeeList[i].firstName}</h2>
            <h3>${employeeList[i].role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employeeList[i].id}</li>
                <li class="list-group-item"><a href=`mailto:${employeeList[i].email}`>Email: ${employeeList[i].email}</a></li>
                <li class="list-group-item">School: ${employeeList[i].school}</li>
            </ul>
        </div>
    </card>
            `;
        } else {
            starterHTML += `
    <card class="card employee-card">
        <div class="card-header">
            <h2>${employeeList[i].firstName}</h2>
            <h3>${employeeList[i].role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employeeList[i].id}</li>
                <li class="list-group-item"><a href=`mailto:${employeeList[i].email}`>Email: ${employeeList[i].email}</a></li>
            </ul>
        </div>
    </card>
            `;
        }
    }
    // return and end the closing HTML tags
    return starterHTML += `
        </main>
    </body>
    </html>`;
};

module.exports = {
    writeToHTML
};
