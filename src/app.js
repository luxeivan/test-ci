export default function appObject(gamer) {
  if (gamer.health > 50) {
    return 'healthy';
  }
  if (gamer.health > 15) {
    return 'wounded';
  }
  if (gamer.health <= 15) {
    return 'critical';
  }
  return null;
}
