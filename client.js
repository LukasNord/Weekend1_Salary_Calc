console.log('js');


$(document).ready(start);

function start(){
  console.log('jQuery');
$('#submit').on('click', formSubmit);
$('#tableBody').on('click', 'button', deleteRow);


}// end start function



class Employee {

  constructor(firstName,lastName,idNum,jobTitle,annualSalary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.idNum=idNum;
    this.jobTitle=jobTitle;
    this.annualSalary=annualSalary;
  }//end constructor
  monthlyCost(){
    var mCost = (this.annualSalary / 12);


    return Number(mCost.toFixed(2));
  }//end monthly Cost



}//end class

var costArray = [];


function formSubmit(){
  var monthlyTotalCost = 0;
  //create new employee object
  employee = new Employee($('#firstName').val(),$('#lastName').val(),$('#idNum').val(),$('#jobTitle').val(),$('#annualSalary').val());

  //save our employee cost data for future manipulation.
  costArray.push( employee.monthlyCost() );
  //send employee data to the DOM
  var $row = $('tbody');
  $row.append('<td>' + employee.firstName + '</td>');
  $row.append('<td>' + employee.lastName + '</td>');
  $row.append('<td>' + employee.idNum + '</td>');
  $row.append('<td>' + employee.jobTitle + '</td>');
  $row.append('<td>' + employee.annualSalary+ '</td>');
  $row.append('<td class="monthlyCost">' + employee.monthlyCost() + '</td>');
  $row.append('<button type="button" class="deleteRow">' + 'Delete' + '</button>');
  $('#tableBody').append('<tr>'); //set the next row

  //Monthly total counter
  for(var i= 0; i<costArray.length; i++){
    monthlyTotalCost +=  costArray[i];
  }//end for loop
  //push monthly total to the DOM
  $('#showCost').text(monthlyTotalCost);
  //clear inputs
  $('input').val('');
}//end formSubmit


function deleteRow(){
  console.log($('this').closest('tr'));

}
