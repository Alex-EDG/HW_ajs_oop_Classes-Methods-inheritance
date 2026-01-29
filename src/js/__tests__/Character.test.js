import Character from '../../js/Character';
import Bowman from '../../js/Bowman';
import Swordsman from '../../js/Swordsman';
import Magician from '../../js/Magician';
import Undead from '../../js/Undead';
import Zombie from '../../js/Zombie';
import Daemon from '../../js/Daemon';

test('Заданный персонаж не существует', () => {
  expect(() => {
    return new Character('Gobi', 'Goblin');
  }).toThrow();
});

// Вариант 1
test('Create Bowman', () => {
  const recieved = new Bowman('Boris', 'Bowman');
  expect(recieved).toEqual({
    name: 'Boris',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('Create Swordsman', () => {
  const recieved = new Swordsman('Li', 'Swordsman');
  expect(recieved).toEqual({
    name: 'Li',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('Create Magician', () => {
  const recieved = new Magician('Mao', 'Magician');
  expect(recieved).toEqual({
    name: 'Mao',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('Create Undead', () => {
  const recieved = new Undead('Deyan', 'Undead');
  expect(recieved).toEqual({
    name: 'Deyan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('Create Zombie', () => {
  const recieved = new Zombie('Zoya', 'Zombie');
  expect(recieved).toEqual({
    name: 'Zoya',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('Create Daemon', () => {
  const recieved = new Daemon('Dima', 'Daemon');
  expect(recieved).toEqual({
    name: 'Dima',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

// Вариант 2 (Data Driven)
const dataList = [
  [new Bowman('Boris', 'Bowman'), { name: 'Boris', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 }],
  [new Swordsman('Li', 'Swordsman'), { name: 'Li', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 }],
  [new Magician('Mao', 'Magician'), { name: 'Mao', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 }],
  [new Undead('Deyan', 'Undead'), { name: 'Deyan', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 }],
  [new Zombie('Zoya', 'Zombie'), { name: 'Zoya', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 }],
  [new Daemon('Dima', 'Daemon'), { name: 'Dima', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40 }]
];

test.each(dataList)('Testing create %s', (personData, expected) => {
  expect(personData).toEqual(expected);
});
