//Problem 2
import { Student } from "../types";

const arrayOfStudents = (names: string[], ages: number[]): Student[] => {
  return names.map((name: string, index: number) => {
    return {
      name: name,
      age: ages[index],
    };
  });
};

export default arrayOfStudents; // Uncomment this line when done writing the function
