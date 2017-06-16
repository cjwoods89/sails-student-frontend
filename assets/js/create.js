/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function(){

  $(function(){

    var addForm = $('#addStudentForm');

    addForm.validate({

      errorClass: "text-danger",
      rules: {
        first_name: {
          required: true,
          minlength: 2
        },
        last_name: {
          required: true,
          minlength: 2
        },
        start_date: {
          required: true,
          dateISO: true
        },
        gpa: {
          min: 0,
          max: 4.0
        },
        sat: {
          min: 400,
          max: 1400
        }
      },
      messages: {
        first_name: {
          required: "I pity the fool that leaves this blank.",
          minlength: jQuery.validator.format("PICNIC ERROR: Please add at least two characters!") // Problem in chair, not in computer
        },
        last_name: {
          required: "I pity the fool that leaves this blank",
          minlength: jQuery.validator.format("PICNIC ERROR: Please add at least two characters!") // Problem in chair, not in computer
        },
        start_date: {
          required: "I pity the fool that leaves this blank",
          dateISO: "ID10T ERROR: You have to use YYYY-MM-DD format!" // Idiot error
        },
        gpa: {
          min: jQuery.validator.format("PEBKAC ERROR: Below the allowable limit!"), // Problem exists between keyboard and chair
          max: jQuery.validator.format("IBM ERROR: Above the allowable limit!") // Idiot Behind Machine
        },
        sat: {
          min: jQuery.validator.format("PEBKAC ERROR: Below the allowable limit!"), // Problem exists between keyboard and chair
          max: jQuery.validator.format("IBM ERROR: Above the allowable limit!") // Idiot Behind Machine
        }
      }


    }); // <-- Closes validate


  })

})();
