import Character from '../../js/Character';

test('Количество символов в имени менее 2', () => {
  expect(() => {
    return new Character('D', 'Daemon');
  }).toThrow();
});

test('Количество символов в имени более 10', () => {
  expect(() => {
    return new Character('Daaeemmoonn', 'Daemon');
  }).toThrow();
});

test('Имя не является строкой', () => {
  expect(() => {
    return new Character(1, 'Daemon');
  }).toThrow();
});
