// Problem 3
import { Professor, Class, Student } from "../types";

const studentsTaughtByProf = (prof: Professor): string[] => {
  let students: Student[] = [];
  prof.classes.forEach((c: Class) => {
    c.students.forEach((s: Student) => {
      students.push(s);
    });
  });
  students = students.sort((studentA: Student, studentB: Student) => {
    return studentA.age - studentB.age;
  });
  return students.map((s: Student) => s.name);
};

export default studentsTaughtByProf; // Uncomment this line when done writing the function
