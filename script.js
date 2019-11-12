//Q2-customer ID page
function validateForm() {
  var fName = document.customerIDForm.firstName.value;
  var lName = document.customerIDForm.lastName.value;
  var customerID = document.customerIDForm.customerID.value;

  if (fName == null || fName == "") {
    alert("Please fill in your name");
    return false;
  }
  if (customerID.length < 6) {
    alert("Your Customer ID has 6 numbers.");
    return false;
  }
  if (lName == null || lName == "") {
    alert("Please fill in your last name");
    return false;
  }
}

//Q2-name page
function validateForm2() {
  var fName2 = document.nameForm.firstName2.value;
  var lName2 = document.nameForm.lastName2.value;

  if (fName2 == null || fName2 == "") {
    alert("Please fill in your name");
    return false;
  }
  if (lName2 == null || lName2 == "") {
    alert("Please fill in your last name");
    return false;
  }
}

//Q3-verify ID page
//ensures user inputs at least one form of ID
function validateForm3() {
  var licence = document.verifyForm.licence.value;
  var passport = document.verifyForm.passport.value;
  var medicare = document.verifyForm.medicare.value;
  var birthcert = document.verifyForm.birthcert.value;

  if (
    licence == null &&
    passport == null &&
    medicare == null &&
    birthcert == null
  ) {
    alert("Please use at least one form of verification");
    return false;
  } else if (
    licence == "" &&
    passport == "" &&
    medicare == "" &&
    birthcert == ""
  ) {
    alert("Please use at least one form of verification");
    return false;
  }
}

//Q4-address page
//ensures user enters main address and an email for contact
function validateForm4() {
  var address = document.addressForm.address.value;
  var email = document.addressForm.email.value;

  if (address == null || address == "") {
    alert("Please fill in your address");
    return false;
  }
  if (email == null || email == "") {
    alert("Please fill in an email");
    return false;
  }
}
