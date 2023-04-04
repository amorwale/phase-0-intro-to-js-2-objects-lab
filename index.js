// Write your solution in this file!
const employee = {name: "Nick", streetAddress: "16 Shephard"}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
        return {...employeeObject,[key]: value
        };
      }

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject;
}

function deleteFromEmployeeByKey(employee, key) {
    const newlist = {...employee};
    delete newlist[key];
    return newlist;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}