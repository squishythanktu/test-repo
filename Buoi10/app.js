let arr = [];

const btnAdd = document.getElementById('btnAdd');
const btnEdit = document.getElementById('btnEdit');
let isArrayEmpty = true;
let index = 0;

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();

    const idPerson = document.getElementById('idPerson');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const salary = document.getElementById('salary');
    const city = document.getElementById('city');
    const tableBody = document.getElementById('tableBody');

    arr.push({
        id: index++,
        fullname: fullname.value, 
        email: email.value,
        salary: salary.value,
        city: city.value
    });

    resetInputs();
    
    if(isArrayEmpty) {
        renderArr(arr);
        isArrayEmpty = false;
    }
    else {
        renderLastPerson(arr);
    }
})

btnEdit.addEventListener("click", (event) => {
    event.preventDefault();

    const idPerson = document.getElementById('idPerson');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const salary = document.getElementById('salary');
    const city = document.getElementById('city');
    const tableBody = document.getElementById('tableBody');

    objIndex = arr.findIndex((obj => obj.id == idPerson.value));

    //Log object to Console.
    console.log("Before update: ", arr[objIndex])

    //Update object's name property.
    arr[objIndex].fullname = fullname.value;
    arr[objIndex].email = email.value;
    arr[objIndex].salary = salary.value;
    arr[objIndex].city = city.value;

    console.log("After update: ", arr[objIndex])
    
    resetInputs();
    btnAdd.style.display = 'block';
    btnEdit.style.display = 'none';
    
    tableBody.innerText = '';
    renderArr(arr);
})

function Delete(id) {
    arr = arr.filter(person => person.id !== id);
    tableBody.innerText = '';
    renderArr(arr);
}

function Edit(id) {
    const idPerson = document.getElementById('idPerson');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const salary = document.getElementById('salary');
    const city = document.getElementById('city');

    const person = arr.find(person => person.id === id);

    idPerson.value = person.id;
    fullname.value = person.fullname;
    email.value = person.email;
    salary.value = person.salary;
    city.value = person.city;

    btnAdd.style.display = 'none';
    btnEdit.style.display = 'block';
}

function renderArr(arr) {
    arr.forEach((person) => {
        const row = document.createElement('tr');
        row.id = person.id;
        row.innerHTML = `
            <td>${person.fullname}</td>
            <td>${person.email}</td>
            <td>${person.salary}</td>
            <td>${person.city}</td>
            <td>
                <a onClick="Edit(${person.id})">Edit</a>
                <a onClick="Delete(${person.id})">Delete</a>
            </td>
        `
        tableBody.appendChild(row);
    })
}

function renderLastPerson(arr) {
    const lastPerson = [...arr].pop()
    const row = document.createElement('tr');
    row.id = lastPerson.id;
    row.innerHTML = `
        <td>${lastPerson.fullname}</td>
        <td>${lastPerson.email}</td>
        <td>${lastPerson.salary}</td>
        <td>${lastPerson.city}</td>
        <td>
        <a onClick="Edit(${lastPerson.id})">Edit</a>
        <a onClick="Delete(${lastPerson.id})">Delete</a>
        </td>
    `
    tableBody.appendChild(row);
}

function resetInputs() {
    fullname.value = '';
    email.value = '';
    salary.value = '';
    city.value = '';
}
