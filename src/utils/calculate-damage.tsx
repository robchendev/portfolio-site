export const calculateDamage = (level: number, power: number) => {
  console.log(((2 * level) / 10) * power);
  return ((2 * level) / 10) * power;
};
