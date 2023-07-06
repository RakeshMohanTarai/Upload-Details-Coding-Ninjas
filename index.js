document.addEventListener('DOMContentLoaded', function() {
    function allowOnlyAlphabets(event) {
      var key = event.key;
      if (/^[A-Za-z]$/.test(key)) {
        return true;
      } else {
        event.preventDefault();
      }
    }

    function allowOnlyNumbers(event) {
      var key = event.key;
      if (/^\d$/.test(key)) {
        return true;
      } else {
        event.preventDefault();
      }
    }

    document.getElementById('studentForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission from refreshing the page

      // Retrieve form inputs
      var name = document.getElementById('nameInput').value;
      var rollNumber = document.getElementById('rollNumberInput').value;
      var marks = parseInt(document.getElementById('marksInput').value, 10);

      // Validate marks value
      if (marks > 100) {
        alert("Marks value cannot be greater than 100");
        return;
      }

      // Create a new student record
      var studentRecord = document.createElement('div');
      studentRecord.classList.add('student-record');
      studentRecord.style.backgroundColor = 'green';
      studentRecord.innerHTML = 'Roll No - ' + rollNumber + ', ' + name + ' has scored ' + marks + ' marks';

      // Append the new record to the student list
      document.getElementById('studentList').appendChild(studentRecord);

      // Reset the form inputs
      document.getElementById('nameInput').value = '';
      document.getElementById('rollNumberInput').value = '';
      document.getElementById('marksInput').value = '';
    });

    document.getElementById('nameInput').addEventListener('keypress', allowOnlyAlphabets);
    document.getElementById('rollNumberInput').addEventListener('keypress', allowOnlyNumbers);
  });