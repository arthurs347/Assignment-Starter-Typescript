// Problem 4
import { Student, Athlete } from "../types";

const allAthletes = (
  students: (Student | Athlete)[],
  defaultSport: string
): Athlete[] => {
  return students.map((student: Student | Athlete) => {
    if (student.hasOwnProperty("sport")) {
      return student as Athlete;
    } else {
      return {
        ...student,
        sport: defaultSport,
      };
    }
  });
};

export default allAthletes; // Uncomment this line when done writing the function
