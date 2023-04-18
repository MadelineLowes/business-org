const fs = require('fs');

function writeToHTML(employeeList) {
    const createHTML = generateHTML(employeeList);
    fs.writeFile('index.html', createHTML, (err) =>
        // let user know if there was an error or if the file was created successfully
        err ? console.log(err) : console.log('\nindex.html was created successfully\n')
    );
}

function generateHTML(businessList) {
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
                <h1 class="text-center">My Business </h1>
            </header>
        </div>
        <main class="team-area col-12 d-flex justify-content-center">`;
    // iterate through businessList DEPT array and add each DEPT to the HTML
    for (let i = 0; i < businessList[0][i].length; i++) {
        starterHTML += `
            <card class="card employee-card">
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${businessList[0][i].id}</li>
                        <li class="list-group-item">Department: ${businessList[0][i].department}</li>
                    </ul>
                </div>
            </card>
            `;
    }
    // iterate through businessList ROLE array and add each ROLE to the HTML
    for (let i = 0; i < businessList[1][i].length; i++) {
        starterHTML += `
                <card class="card employee-card">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${businessList[1][i].id}</li>
                            <li class="list-group-item">Title: ${businessList[1][i].title}</li>
                            <li class="list-group-item">Department: ${businessList[1][i].department}</li>
                            <li class="list-group-item">Salary: ${businessList[1][i].salary}</li>
                        </ul>
                    </div>
                </card>
                `;
    }
    // iterate through businessList EMP array and add each EMP to the HTML
    for (let i = 0; i < businessList[2][i].length; i++) {
        starterHTML += `
        <card class="card employee-card">
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${businessList[2][i].id}</li>
                    <li class="list-group-item">First: ${businessList[2][i].first}</li>
                    <li class="list-group-item">Last: ${businessList[2][i].last}</li>
                    <li class="list-group-item">Title: ${businessList[2][i].title}</li>
                    <li class="list-group-item">Department: ${businessList[2][i].department}</li>
                    <li class="list-group-item">Salary: ${businessList[2][i].salary}</li>
                    <li class="list-group-item">Manager: ${businessList[2][i].manager}</li>
                </ul>
            </div>
        </card>
        `;
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
