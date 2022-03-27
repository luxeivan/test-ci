import appObject from '../app';

test.each([
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'Волшебник', health: 40 }, 'wounded'],
  ['critical', { name: 'Демон', health: 10 }, 'critical'],
])(
  ('should calculate cashback for %s level with %i amount'),
  (level, amount, expected) => {
    const result = appObject(amount);
    expect(result).toBe(expected);
  },
);
