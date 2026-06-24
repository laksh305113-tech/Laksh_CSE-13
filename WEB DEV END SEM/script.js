var form = document.getElementById('marksForm');
var result = document.getElementById('result');
var totalMarksSpan = document.getElementById('totalMarks');
var averageMarksSpan = document.getElementById('averageMarks');
var gradeSpan = document.getElementById('grade');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var marks = [];
  for (var i = 1; i <= 5; i++) {
    var mark = Number(document.getElementById('subject' + i).value);
    marks.push(mark);
  }

  for (var i = 0; i < marks.length; i++) {
    if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100) {
      alert('Please enter marks from 0 to 100 for all subjects.');
      return;
    }
  }

  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }

  var average = total / marks.length;

  totalMarksSpan.textContent = total;
  averageMarksSpan.textContent = average.toFixed(2);
  gradeSpan.textContent = getGrade(average);
  result.classList.remove('hidden');
});

function getGrade(average) {
  if (average >= 90) {
    return 'A+';
  } else if (average >= 80) {
    return 'A';
  } else if (average >= 70) {
    return 'B';
  } else if (average >= 60) {
    return 'C';
  } else if (average >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}
