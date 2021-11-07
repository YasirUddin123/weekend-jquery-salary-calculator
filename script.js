$(document).ready(readyNow);

let employeeInfo = [];

let globalIndex = 0;

function readyNow(){
    showMonthlyTotal(employeeInfo);
    $('#submitButton').on('click', handleSubmitButton)
    // $('.deleteMe').on('click', handleDeleteButton)
}

function handleSubmitButton(){
    let firstNameValue = $("#firstNameValue").val();
    let lastNameValue = $("#lastNameValue").val();
    let idValue = $("#idValue").val();
    let jobTitleValue = $("#jobTitleValue").val();
    let annualSalaryValue = $("#annualSalaryValue").val();

    let employeeIndex = globalIndex;
    globalIndex++


    let newEmployee = {
        firstName:firstNameValue,
        lastName: lastNameValue,
        ID: idValue,
        Title: jobTitleValue,
        Salary: Number(annualSalaryValue),
        employeeIndex: employeeIndex
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
            <tr id="row${person.employeeIndex}">
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.ID}</td>
                <td>${person.Title}</td>
                <td>$${person.Salary}</td>
                <td><button id="button${person.employeeIndex}" type="button">Delete</button><td>
            </tr>`;
            newRow.append(newCompletedRow);
            $(`#button${person.employeeIndex}`).on('click', handleDeleteButton);
    }

}

function handleDeleteButton(event){
    // let byebye = $(`#button${person.ID}`)
    // byebye.siblings("td").remove();
    console.log(event.target.id.substring(6));
    let byebyeID = event.target.id.substring(6);
    for(let employee of employeeInfo){
        if(employee.employeeIndex == byebyeID){
            employeeInfo.splice(employeeInfo.indexOf(employee),1);
            $(`#row${byebyeID}`).remove();
        }
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
