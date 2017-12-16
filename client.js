console.log('js');


$(document).ready(start);

function start(){
  console.log('jQuery');
$('#submit').on('click', formSubmit);


}



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


  //Write math methods here for later use.  Pushing the results to the DOM.
}//end class


function formSubmit(){
  employee = new Employee($('#firstName').val(),$('#lastName').val(),$('#idNum').val(),$('#jobTitle').val(),$('#annualSalary').val());
  // $('#tableBody').append('<tr>');

  var $row = $('tbody');
  //console.log($row);
  $row.append('<td>' + employee.firstName + '</td>');
  $row.append('<td>' + employee.lastName + '</td>');
  $row.append('<td>' + employee.idNum + '</td>');
  $row.append('<td>' + employee.jobTitle + '</td>');
  $row.append('<td>' + employee.annualSalary+ '</td>');
  $row.append('<td class="montlyCost">' + employee.monthlyCost() + '</td>');

  $('#tableBody').append('<tr>');


  //console.log(employee);





}//end formSubmit
