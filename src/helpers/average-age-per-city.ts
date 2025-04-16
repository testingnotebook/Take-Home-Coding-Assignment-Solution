import { User } from "../types/User";

export const calculateAverageAgePerCity = (users: User[]) => {
  const uniqueCityNames = _getUniqueCityNames(users);
  const averageByCity: Record<string, number> = {};
  uniqueCityNames.forEach((city) => {
    averageByCity[city] = _calculateAverage(users, city);
  });
  return averageByCity;
};

export const _getUniqueCityNames = (users: User[]) => {
  return [...new Set(users.map((u) => u.city.toLowerCase()).filter(Boolean))];
};

export const _calculateAverage = (users: User[], city: string) => {
  const usersByCity = users.filter((user) => user.city.toLowerCase() === city);
  const sumOfAllUserAges = usersByCity.reduce((sum, user) => sum + user.age, 0);
  return Number(Math.round(sumOfAllUserAges / usersByCity.length));
};
