// Problem 6
import { User } from "../types";

function verifyUser(user: User): string[] | User {
  let missingFields: string[] = [];
  if (!user?.id) {
    missingFields.push("id");
  }
  if (!user?.name) {
    missingFields.push("name");
  }
  if (!user?.address) {
    missingFields.push("address");
  }
  if (!user?.address?.street) {
    missingFields.push("street");
  }
  if (!user?.address?.city) {
    missingFields.push("city");
  }
  if (user === null) {
    missingFields.push("userData");
  }

  return missingFields.length > 0 ? missingFields : user;
}

export default verifyUser;
