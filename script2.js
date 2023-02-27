function checkAge(event) {
    event.preventDefault();
    var yearOfBirth = document.getElementById("year-of-birth").value;
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;
  
    var isPrime = true;
  
    for (let i = 2; i < age; i++) {
      if (age % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    const resultElement = document.getElementById("result1");
  
    if (isPrime) {
      resultElement.innerHTML = "Your age is " +age+ " and it is prime!";
    } else {
      resultElement.innerHTML = "Your age is " +age+ " and is not prime";
    }
  }
  document.getElementById("age-form").addEventListener("submit", checkAge);
  
  var numbers = [];
  function getNumbers() {
      for (let i = 1; i <= 10; i++) {
        let num = prompt(`Enter number ${i}:`);
        numbers.push(num);
      }
    }
  
  function sortNumbers() {
      var sortedNumbers = mergeSort(numbers);
      var result = document.getElementById("output");
      result.innerHTML = "Sorted numbers: "+sortedNumbers;
    }
  
  function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      var mid = Math.floor(arr.length / 2);
      var left = arr.slice(0, mid);
      var right = arr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
    }
    
  function merge(left, right) {
      let result = [];
      let i = 0;
      let j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }
      return result.concat(left.slice(i)).concat(right.slice(j));
    }
  
  
  var mybutton=document.getElementById("myBtn");
  function returnTop(){
      document.body.scrollTop=0;
  };
  
  function reverseString() {
      var input1= document.getElementById("inputString").value;
      var output1= document.getElementById("output1");
      var reversed_string = input1.split("").reverse().join("");
      output1.textContent = "Reversed string: "+reversed_string;
    };
  
  function convertString() {
      var input2= document.getElementById("inputString2").value;
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      var output = '';
      var consonants = '';
    
      for (let i = 0; i < input2.length; i++) {
        if (vowels.includes(input2[i])) {
          output = input2.slice(i) + consonants + 'ay';
          break;
        } else {
          consonants += input2[i];
        }
      }
      document.getElementById('output2').innerHTML = "Converted string: "+ output;
    };
  
  
    function checkPalindrome() {
      var input = document.getElementById('input').value;
      var result = document.getElementById('result');
      if (isPalindrome(input)) {
        result.innerHTML = input +"is a palindrome.";
      } else {
        result.innerHTML= input+" is not a palindrome.";
      }
    }
    function isPalindrome(str) {
      if (str.length <= 1) {
        return true;
      }
      if (str[0] == str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
      } else {
        return false;
      }
    }
  
  
  class Course {
  constructor(name, code, instructor, startDate, endDate) {
  this.name = name;
  this.code = code;
  this.instructor = instructor;
  this.startDate = startDate;
  this.endDate = endDate;
  }
  }
  
  const courseForm = document.querySelector('#course-form');
  
  courseForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.querySelector('#course-name').value;
  var code = document.querySelector('#course-code').value;
  var instructor = document.querySelector('#instructor').value;
  var startDate = document.querySelector('#start-date').value;
  var endDate = document.querySelector('#end-date').value;
  
  var course = new Course(name, code, instructor, startDate, endDate);
  console.log(course);
  });