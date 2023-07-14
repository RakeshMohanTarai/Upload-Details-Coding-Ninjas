document.addEventListener('DOMContentLoaded', function() {
  function allowOnlyAlphabets(event) {
    var key = event.key;
    if (!/^[A-Za-z ]$/.test(key)) {
      event.preventDefault();
    }
  }

  function allowOnlyNumbers(event) {
    var key = event.key;
    if (!/^\d$/.test(key)) {
      event.preventDefault();
    }
  }

  document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Retrieve form inputs
    var name = document.getElementById('nameInput').value;
    var rollNumber = document.getElementById('rollNumberInput').value;
    var marks = document.getElementById('marksInput').value;

    // Validate marks value
    if (marks !== '' && isNaN(marks)) {
      alert("Marks value must be numeric");
      return;
    }

    // Validate roll number value
    if (rollNumber !== '' && isNaN(rollNumber)) {
      alert("Roll number must be numeric");
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
  document.getElementById('marksInput').addEventListener('keypress', allowOnlyNumbers);
});
  
  // Add event listener to the form submission
  document.getElementById("studentForm").addEventListener("submit", function(event) {
    // Your desired code for form submission
  });

  // Restrict keyboard input for marksInput field
  document.getElementById("marksInput").addEventListener("input", function(event) {
    var marksInput = event.target;
    var marks = parseInt(marksInput.value);
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
      marksInput.value = ""; // Clear the input if it is not a valid number or out of range
    }
  });   
