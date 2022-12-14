/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");
/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */

/*  الجزء الأول والثاني من التمرين */

grades.push(99);
grades.pop();
grades.forEach((item) => {
  all_grades_div.innerHTML += `<span>${item}<span>`;
});

let randomIndex = Math.floor(Math.random() * grades.length);

random_grade_div.innerHTML = `<span>#${randomIndex}: ${grades[randomIndex]}<span>`;

/* الجزء الثالث من التمرين */
let course = {
  name: "UniCODE",
  track: "",
  studentsCount: 0,
  location: "Kuwait University",
};

//Change studentsCount,track property here
(studentsCount = 40),
  (track = "web"),
  //Console log here
  Console.log(
    `Hello my name is sabeha", "i'm in ${course.track} ${course.name}`
  );

//Create student object here
let student = {
  name: sabeha,
  universty: paaet,
};

let unicodes = [cat, dog, bird];
