











const students = new Set([
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
]);


function Students(studentsSet) {
  let studentsArr = Array.from(studentsSet);


  let urtacha = studentsArr.map(student => {
    let sum = student.scores.reduce((a, b) => a + b, 0);
    let urt = sum / student.scores.length;
    return { name: student.name, urt };
  });
  console.log(urtacha);


  let maxUrta = Math.max(...urtacha.map(s => s.urt));
  console.log( maxUrta);


  let best = urtacha.filter(s => s.urt === maxUrta);
  console.log( best);
}

Students(students);
