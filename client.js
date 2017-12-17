console.log('js');


$(document).ready(start);

function start(){
  console.log('jQuery');
$('#submit').on('click', formSubmit);
$('#tableBody').on('click', '.deleteRow', deleteRow);


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

var costArray = []; //track our monthly costs as they are submitted
var trackDeletes = []; //track monthly costs as they are deleted

function formSubmit(){

  //create new employee object
  employee = new Employee($('#firstName').val(),$('#lastName').val(),$('#idNum').val(),$('#jobTitle').val(),$('#annualSalary').val());

  //save our employee cost data for future manipulation.
  costArray.push( employee.monthlyCost() );
  //send employee data to the DOM
  var $row = $('tbody:last-child');

  $row.append('<tr><td>' + employee.firstName + '</td><td>' + employee.lastName + '</td><td>' + employee.idNum + '</td><td>' + employee.jobTitle + '</td><td>' + employee.annualSalary+ '</td><td class="monthlyCost">' + employee.monthlyCost() + '</td><td><button type="button" class="deleteRow">' + 'Delete' + '</button></td></tr>');

  //  This whole Code block worked, but wouldn't wrap my <td> block in a <tr> so i couldn't select for it later.
  //  Had to resort to the above code to force wrap the <tr></tr> around the data.  Would like to revisit this and figure out what i'm missing.
  // $row.append('<td>' + employee.firstName + '</td>');
  // $row.append('<td>' + employee.lastName + '</td>');
  // $row.append('<td>' + employee.idNum + '</td>');
  // $row.append('<td>' + employee.jobTitle + '</td>');
  // $row.append('<td>' + employee.annualSalary+ '</td>');
  // $row.append('<td class="monthlyCost">' + employee.monthlyCost() + '</td>');
  // $row.append('<td><button type="button" class="deleteRow">' + 'Delete' + '</button></td></tr>');
  //$('#tableBody').append('<tr>'); //set the next row


  //create local counters
  var monthlyTotalCost = 0;
  var totalDeletes = 0;
  //Monthly total counter
  for(var k= 0; k<costArray.length; k++){
    monthlyTotalCost +=  costArray[k];
  }
  for(var i = 0; i<trackDeletes.length;i++){
    totalDeletes += trackDeletes[i];

  }//end for loop
  var pushNewTotal = 0;
  pushNewTotal = monthlyTotalCost - totalDeletes;
  //push monthly total to the DOM
  $('#showCost').text(pushNewTotal);
  //clear inputs
  $('input').val('');
}//end formSubmit





function deleteRow(){

  //send deleted selection to an array.
  trackDeletes.push(Number($(this).parent().prev().text()));
  //create local counters
  var monthlyTotalCost = 0;
  var totalDeletes = 0;

  for(var i = 0; i<trackDeletes.length;i++){
    totalDeletes += trackDeletes[i];
  }//end for loop
  for(var k= 0; k<costArray.length; k++){
    monthlyTotalCost +=  costArray[k];
  }//end for loop
  var pushNewTotal = monthlyTotalCost - totalDeletes;
  $('#showCost').text(pushNewTotal);
  $(this).parent().parent().remove();


}
