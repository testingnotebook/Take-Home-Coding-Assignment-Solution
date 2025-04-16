import { User } from "../types/User";

export const calculateUsersWithMostFriendsByCity = (users: User[]) => {
  const uniqueCityNames = _getUniqueCityNames(users);
  const userWithMostFriendsByCity: Record<string, string> = {};
  uniqueCityNames.forEach((city) => {
    userWithMostFriendsByCity[city] = _calculateUserWithMostFriendsByCity(
      users,
      city
    );
  });
  return userWithMostFriendsByCity;
};

export const _getUniqueCityNames = (users: User[]) => {
  return [...new Set(users.map((u) => u.city.toLowerCase()).filter(Boolean))];
};

export const _calculateUserWithMostFriendsByCity = (
  users: User[],
  city: string
) => {
  const usersByCity = users.filter((user) => user.city.toLowerCase() === city);
  const userFriendCount: Record<string, number> = {};
  usersByCity.forEach((user) => {
    userFriendCount[user.id] = user.friends.length;
  });
  const sorted = Object.entries(userFriendCount).sort(([, a], [, b]) => b - a);
  return sorted[0][0];
};
