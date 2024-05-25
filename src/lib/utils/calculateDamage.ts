export const calculateDamage = (level: number, power: number) => {
  return ((2 * level) / 10) * power;
};
