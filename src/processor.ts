import { fetchUserData } from "./api-client/client";
import { calculateAverageAgePerCity } from "./helpers/average-age-per-city";
import { calculateAverageFriendsPerCity } from "./helpers/average-friends-per-city";
import { uriParameterCheck } from "./helpers/error-handling";
import { calculateUsersWithMostFriendsByCity } from "./helpers/users-with-most-friends-by-city";
import { User } from "./types/User";

const uri = uriParameterCheck();

(async () => {
  try {
    const users: User[] = await fetchUserData(uri);
    const averageAgePerCity = calculateAverageAgePerCity(users);
    const averageFriendsPerCity = calculateAverageFriendsPerCity(users);
    const usersWithMostFriendsPerCity =
      calculateUsersWithMostFriendsByCity(users);
    const result = {
      averageAgePerCity: averageAgePerCity,
      averageFriendsPerCity: averageFriendsPerCity,
      usersWithMostFriendsPerCity: usersWithMostFriendsPerCity,
    };
    console.log(JSON.stringify(result));
  } catch (err: any) {
    console.error("The script has had an error terminated:", err.message);
    process.exit(1);
  }
})();
