$(document).ready(readyNow);

let employeeInfo = [];

function readyNow(){
    showMonthlyTotal(employeeInfo);
    $('#submitButton').on('click', handleSubmitButton)
}

function handleSubmitButton(){
    let firstNameValue = $("#firstNameValue").val();
    let lastNameValue = $("#lastNameValue").val();
    let idValue = $("#idValue").val();
    let jobTitleValue = $("#jobTitleValue").val();
    let annualSalaryValue = $("#annualSalaryValue").val();

    let newEmployee = {
        firstName:firstNameValue,
        lastName: lastNameValue,
        ID: idValue,
        Title: jobTitleValue,
        Salary: Number(annualSalaryValue)
    }

    employeeInfo.push(newEmployee);

    $("#firstNameValue").val('');
    $("#lastNameValue").val('');
    $("#idValue").val('');
    $("#jobTitleValue").val('');
    $("#annualSalaryValue").val('');

    addEmployee(employeeInfo);
    showMonthlyTotal(employeeInfo);
}



function addEmployee(employeeList){
    let newRow = $('#addNewEmployeeRow')
    newRow.empty()
    for(let person of employeeList){
        let newCompletedRow = `
            <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.ID}</td>
                <td>${person.Title}</td>
                <td>$${person.Salary}</td>
                <td><button type="button">Delete</button><td>
            </tr>`;
            newRow.append(newCompletedRow);
    }
}


function showMonthlyTotal(salaryList){
    let totalPrice = calculateMonthlyTotal(salaryList);
    $('#totalMonthlyValue').text(`Monthly Total: $${totalPrice}`);
    if(totalPrice > 20000) {
        $('#totalMonthlyValue').addClass("redColor");
    }
}

function calculateMonthlyTotal(salaryList){
    let sum = 0;
        for(let employee of salaryList){
            sum += employee.Salary;
        }
    return (sum/12).toFixed(2);
    }
