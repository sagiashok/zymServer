const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#userName');
const userFatherNameInput = document.querySelector('#userFatherName');
const useremailInput = document.querySelector('#userEmailId');
const userAgeInput = document.querySelector('#userAge');
const userPackageInput = document.querySelector('#userPackage');
const userpaidAmountInput = document.querySelector('#paidAmount');
const userPhoneNumberInput = document.querySelector('#userPhoneNumber');
const successMessage = document.querySelector('#create-account-form');

form.addEventListener('submit', (event)=>{
    
  validateForm();
 
  if(isFormValid()==true){
     form.submit()
     window.alert("rigestraion sucssfull")
     
	  
	 

      
   }else {
       event.preventDefault();
   }

});
  


function isFormValid(){
  const inputContainers = form.querySelectorAll('.input-group');
  let result = true;
  inputContainers.forEach((container)=>{
      if(container.classList.contains('error')){
          result = false;
      }
  });
  return result;
}

// vaidation part
function validateForm() {
  //USERNAME
  if(usernameInput.value.trim()==''){
      setError(usernameInput, 'Name can not be empty');
  }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
      setError(usernameInput, 'Name must be min 5 and max 15 charecters');
  }else {
      setSuccess(usernameInput);
  }
  // user phone number
    if(userPhoneNumberInput.value.trim() == ""){
      setError(userPhoneNumberInput,"phone number cant be empty")
      console.log(userPhoneNumberInput.value.trim())
    }else if(userPhoneNumberInput.value.trim().length < 10 || userPhoneNumberInput.value.trim().length > 10){
     setError(userPhoneNumberInput,'PHONE NUMBER MUST BE 10 DIGITS')
     
    }else{
      setSuccess(userPhoneNumberInput)
    }


  //USEr father name
  if(userFatherNameInput.value.trim()==''){
    setError(userFatherNameInput, 'Name can not be empty');
}else if(userFatherNameInput.value.trim().length <5 || userFatherNameInput.value.trim().length > 15){
    setError(userFatherNameInput, 'Name must be min 5 and max 15 charecters');
}else {
    setSuccess(userFatherNameInput);
}
  //EMAIL
  if(useremailInput.value.trim()==''){
      setError(useremailInput, 'Provide email address');
  }else if(isEmailValid(useremailInput.value)){
      setSuccess(useremailInput);
  }else{
      setError(useremailInput, 'Provide valid email address');
  }

  //user age
  if(userAgeInput.value.trim()==''){
      setError(userAgeInput, 'user age can not be empty');
  }else {
      setSuccess(userAgeInput);
  }

  

  //user package name
  if(userPackageInput.value.trim()==''){
    setError(userPackageInput, 'please enter package name');
}else if(userPackageInput.value.trim().length < 3){
    setError(userPackageInput, 'PACKAGE NAME MUST BE THREE LETTERS');
}else {
    setSuccess(userPackageInput);
}

//user amount
if(userpaidAmountInput.value.trim()==''){
  setError(userpaidAmountInput, 'please amount you paid');
}else if(userpaidAmountInput.value.toString().trim().length < 4 ){
  setError(userpaidAmountInput, 'the minimum length amount is 4 ');
}else {
  setSuccess(userpaidAmountInput);
}
  

}


// error part
function setError(element, errorMessage) {
  const parent = element.parentElement;
  if(parent.classList.contains('success')){
      parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}


// sucess part
function setSuccess(element){
  const parent = element.parentElement;
  if(parent.classList.contains('error')){
      parent.classList.remove('error');
  }
  parent.classList.add('success');
}

function isEmailValid(email){
  const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return reg.test(email);
}

function isVaiidMobileNumber(mobilenumer){
  const reg  = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/i;
  return reg.test(mobilenumer)
}



