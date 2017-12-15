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
    console.log(this.annualSalary);

    return Number(mCost.toFixed(2));
  }//end monthly Cost


  //Write math methods here for later use.  Pushing the results to the DOM.
}//end class


function formSubmit(){
  employee = new Employee($('#firstName').val(),$('#lastName').val(),$('#idNum').val(),$('#jobTitle').val(),$('#annualSalary').val());

  console.log(employee);




}//end formSubmit
