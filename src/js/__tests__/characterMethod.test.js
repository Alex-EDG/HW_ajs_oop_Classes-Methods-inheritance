import Bowman from '../../js/Bowman';
import Daemon from '../../js/Daemon';
import Magician from '../../js/Magician';
import Swordsman from '../../js/Swordsman';
import Zombie from '../../js/Zombie';

test('Метод levelUp повышает уровень на 1 и изменяет показатели health, attack, deffence', () => {
  const recieved = new Magician('Maga', 'Magician');
  recieved.levelUp();
  expect(recieved).toEqual({
    name: 'Maga',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  });
});

test('Метод levelUp выбрасывает ошибку, если health = 0', () => {
  const recieved = new Zombie('Zoya', 'Zombie');
  recieved.health = 0;
  expect(() => recieved.levelUp()).toThrow('Нельзя повысить уровень умершего!');
});

test('Метод damage(points) меняет внутреннее состояние объекта(нанесение урона)', () => {
  const recieved = new Bowman('Luciy', 'Bowman');
  recieved.damage(1);
  const result = {
    name: 'Luciy',
    type: 'Bowman',
    health: 99.25,
    level: 1,
    attack: 25,
    defence: 25
  };
  expect(recieved).toEqual(result);
});

test('Метод damage(points) не должен изменять значения, если health = 0', () => {
  const recieved = new Swordsman('Stanis', 'Swordsman');
  recieved.health = 0;
  const result = {
    name: 'Stanis',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 10
  };
  recieved.damage(10);
  expect(recieved).toEqual(result);
});

test('При health < 0 метод damage(points) должен установить health = 0', () => {
  const recieved = new Daemon('Stasik', 'Daemon');
  const expectedHealth = 0;
  recieved.damage(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});
