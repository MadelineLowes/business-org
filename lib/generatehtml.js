const fs = require('fs');

function writeToHTML(businessList) {
    const createHTML = generateHTML(businessList);
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
        <title>My Business</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <div class="container-fluid col-12 d-flex justify-content-center">
            <header>
                <h1 class="text-center m-3">My Business </h1>
            </header>
        </div>

        <main class="col-12">
            
    <container class="d-flex container justify-content-evenly mx-auto">
        <button class="btn mx-2 button selected" id="view-all">View All</button>
        <button class="btn mx-2 button" id="view-dept">View Departments</button>
        <button class="btn mx-2 button" id="view-role">View Roles</button>
        <button class="btn mx-2 button" id="view-emp">View Employees</button>
    </container>`;

    starterHTML += `
    <container class="container table-responsive text-nowrap m-3 p-3" id="dept-table">
    <table class="table w-auto table-hover text-center mx-auto">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Department</th>
            </tr>
        </thead>
        <tbody>`
    for (let i = 0; i < businessList[0].length; i++) {
        starterHTML += `
            <tr>
                <th>${businessList[0][i].id}</th>
                <td>${businessList[0][i].department}</td>
            </tr>`;
    };

    starterHTML += `
        </tbody>
    </table>
</container>

<container class="container table-responsive text-nowrap m-3 p-3" id="role-table">
    <table class="table w-auto table-hover text-center mx-auto">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Department</th>
                <th scope="col">Salary</th>
            </tr>
        </thead>
        <tbody>`

    // iterate through businessList ROLE array and add each ROLE to the HTML
    for (let i = 0; i < businessList[1].length; i++) {
        starterHTML += `
            <tr>
                <th>${businessList[1][i].id}</th>
                <td>${businessList[1][i].title}</td>
                <td>${businessList[1][i].department}</td>
                <td>${businessList[1][i].salary}</td>
            </tr>`;
    }

    starterHTML += `
    </tbody>
</table>
</container>

<container class="container table-responsive text-nowrap m-3 p-3" id="emp-table">
<table class="table w-auto table-hover text-center mx-auto">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
            <th scope="col">Manager</th>
        </tr>
    </thead>
    <tbody>`

    // iterate through businessList EMP array and add each EMP to the HTML
    for (let i = 0; i < businessList[2].length; i++) {
        starterHTML += `
            <tr>
                <th>${businessList[2][i].id}</th>
                <td>${businessList[2][i].first}</td>
                <td>${businessList[2][i].last}</td>
                <td>${businessList[2][i].title}</td>
                <td>${businessList[2][i].department}</td>
                <td>${businessList[2][i].salary}</td>
                <td>${businessList[2][i].manager}</td>
            <tr>
            `;
    }

    // return and end the closing HTML tags
    return starterHTML += `
            </tbody>
        </table>
    </container>
    </main>
    <!-- Link to the jQuery library -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <!-- Link to my JavaScript File  -->
    <script src="./script.js"></script>
  </body>
</body>
</html>`;

};

module.exports = {
    writeToHTML
};
