// Problem 5

function countOccurrences<T>(arr: T[], val: T): number {
  let occurrences = arr.filter((element) => element === val);
  return occurrences.length;
}

export default countOccurrences; // Uncomment this line when done writing the function
