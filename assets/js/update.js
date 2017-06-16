/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 3. Use the live search functionality to make the dropdown searchable
 *
 * 4. Add the user glyphicons next to each student in the list
 *
 * 6. Add a menu header to the dropdown
 *
 * 7. Customize further with anything you find intersting
 *
 * 8. When a student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

 (function(){

   $(function(){

      var fName = $('#first_name');
      var lName = $('#last_name');
      var sDate = $('#start_date');
      var gpa = $('#gpa');
      var sat = $('#sat');
      var majorID = $('#major_id');
      var updateBtn = $('.submit');
      var selectOption = $('#employeeId');
      var sID = $('#student_id');
      var updateForm = $('#updateStudentForm');


      function setFields(x,y){

          $("#updateStudentForm :input").prop(x, y);

      }

      function getData(studentID){

         var getPromise = $.get( "http://localhost:1337/student/" + studentID , function( data ) {

            getPromise.done(function(data){

               sID.val(data.student_id);
               fName.val(data.first_name);
               lName.val(data.last_name);
               sDate.val(data.start_date);
               gpa.val(data.gpa);
               sat.val(data.sat);
               majorID.val(data.major_id);

            });

         });

      };

      selectOption.change(function(){

         var studentID = $(this).val();

         setFields('disabled',false);

         // console.log($(this).val())

         getData(studentID);

      });

      updateForm.validate({

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



      setFields('disabled',true);

   })

 })();
