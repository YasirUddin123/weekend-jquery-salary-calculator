$(document).ready(readyNow);

let employeeInfo = [];

function readyNow(){
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
        Salary: annualSalaryValue
    }

    employeeInfo.push(newEmployee);

    $("#firstNameValue").val('');
    $("#lastNameValue").val('');
    $("#idValue").val('');
    $("#jobTitleValue").val('');
    $("#annualSalaryValue").val('');

    addEmployee(employeeInfo);
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
                <td>${person.Salary}</td>
            </tr>`;
            newRow.append(newCompletedRow);
    }
}
