
  // I've tried debugging but the validate script doesn't work unfotunately
  //based off week 10 tutorial code solutions
  var constraints = {
    name: {
      presence: true,
    
      length: {
        minimum: 3,
      },
      format: {
   
        pattern: "[a-z ]+",
    
        flags: "i",
        message: "Please make sure your name only contains letters"
      }
    },
    number: {
      presence: true,
    
      length: {
        minimum: 3,
      },
      format: {
   
        pattern: "[0-9 ]+",
    
        flags: "i",
        message: "Please make sure your name only contains numbers"
      }
    },
    email: {
     
      presence: true,
  
      email: true
    },
    
  
   
  };

  // prevent submit, remains on page
  var form = document.querySelector("form");
  //form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    handleFormSubmit(form);
  });


  var inputs = document.querySelectorAll("input, textarea, select");
  console.log(inputs);
  for (var i = 0; i < inputs.length; ++i) {
    inputs.item(i).addEventListener("change", function(ev) {

      var errors = validate(form, constraints) || {};
      showErrorsForInput(this, errors[this.name])
    });
  }

  function handleFormSubmit(form, input) {


    // validate the form against the constraints
    var errors = validate(form, constraints);
    // then we update the form to reflect the results
    showErrors(form, errors || {});
    if (!errors) {
      showSuccess();
    }
  }

  // Updates the inputs with the validation errors
  function showErrors(form, errors) {
    // We loop through all the inputs and show the errors for that input
    form.querySelectorAll("input[name], select[name]").forEach( function(input) {
      // Since the errors can be null if no errors were found we need to handle
      // that
      showErrorsForInput(input, errors && errors[input.name]);
    });
  }

  // Shows the errors for a specific input
  function showErrorsForInput(input, errors) {
    // This is the root of the input
    var formGroup = closestParent(input.parentNode, "form-group")
      // Find where the error messages will be insert into
      , messages = formGroup.querySelector(".messages");
    // First we remove any old messages and resets the classes
    resetFormGroup(formGroup);
    // If we have errors
    if (errors) {
      // we first mark the group has having errors
      formGroup.classList.add("has-error");
      // then we append all the errors
      errors.forEach(function(error) {
        addError(messages, error);
      });
    } else {
      // otherwise we simply mark it as success
      formGroup.classList.add("has-success");
    }
  }

  // Recusively finds the closest parent that has the specified class
  function closestParent(child, className) {
    if (!child || child == document) {
      return null;
    }
    if (child.classList.contains(className)) {
      return child;
    } else {
      return closestParent(child.parentNode, className);
    }
  }

  function resetFormGroup(formGroup) {
    // Remove the success and error classes
    formGroup.classList.remove("has-error");
    formGroup.classList.remove("has-success");
    // and remove any old messages
    formGroup.querySelectorAll(".help-block.error").forEach(function(el) {
      el.parentNode.removeChild(el);
    });
  }

  // Adds the specified error with the following markup
  // <p class="help-block error">[message]</p>
  function addError(messages, error) {
    var block = document.createElement("p");
    block.classList.add("help-block");
    block.classList.add("error");
    block.innerText = error;
    messages.appendChild(block);
  }

  function showSuccess() {
    // We made it \:D/
    alert("Success!");
  }
