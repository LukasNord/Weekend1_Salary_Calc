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

}//end class




function formSubmit(){
  var employee = new Employee($('#firstName').val(),$('#lastName').val(),$('#idNum').val(),$('#jobTitle').val(),$('#annualSalary').val());

  console.log(employee);




}//end formSubmit
