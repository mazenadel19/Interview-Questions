// At the Magic Cookie Factory, cookies are baked in factorial quantities. A cookie is "perfectly round" if its size ends with a zero. Write a function to determine how many perfectly round cookies will be made when baking with n! ingredients.

export function countPerfectlyRoundCookies(num) {
  let count = 0;
  while (num >= 5) {
    count += Math.floor(num / 5);
    num = Math.floor(num / 5);
  }
  return count;
}

countPerfectlyRoundCookies(5); // 1
countPerfectlyRoundCookies(10); // 2
countPerfectlyRoundCookies(100); //24
