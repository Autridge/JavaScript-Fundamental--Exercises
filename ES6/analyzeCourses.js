const courses = [
  {v
    title: "JavaScript 101",
    students: [
      { name: "Alice", scores: [80, 85, 90] },
      { name: "Bob", scores: [50, 45, 60] },
      { name: "Charlie", scores: [95, 100, 98] },
    ],
  },
  {
    title: "HTML & CSS",
    students: [
      { name: "David", scores: [60, 70, 75] },
      { name: "Eva", scores: [30, 40, 35] },
      { name: "Frank", scores: [88, 92, 85] },
    ],
  },
];

function analyzeCourse(course) {
  if (!course.students || !Array.isArray(course.students)) {
    console.log(`Course "${course.title}" has no students.`);
    return;
  }v

  // Conditional: If the title is "JavaScript 101", carry out the comma (assuming you mean print a comma)
  if (course.title === "JavaScript 101") {
    console.log(",");
  }

  const courseAvg = (
    course.students.reduce(
      (acc, student) =>
        acc +
        student.scores.reduce((sum, score) => sum + score, 0) /
          student.scores.length,
      0
    ) / course.students.length
  ).toFixed(2);

  console.log(`Course: ${course.title} - Average Score: ${courseAvg}`);

  // Process each student
  course.students.forEach((student) => {
    const sum = student.scores.reduce((acc, value) => acc + value, 0);
    const average = sum / student.scores.length;
    const status = average >= 60 ? "Pass" : "Fail";
    console.log(`${student.name} - Avg: ${average.toFixed(2)} (${status})`);
  });

  // Find and print the top scorer
  const topStudent = course.students.reduce((top, curr) => {
    const currAvg = curr.scores.reduce((a, b) => a + b, 0) / curr.scores.length;
    const topAvg = top.scores.reduce((a, b) => a + b, 0) / top.scores.length;
    return currAvg > topAvg ? curr : top;
  });

  const topAverage = (
    topStudent.scores.reduce((a, b) => a + b, 0) / topStudent.scores.length
  ).toFixed(2);

  console.log(`Top Scorer: ${topStudent.name} (${topAverage})`);
}


console.log(analyzeCourse(courses));
