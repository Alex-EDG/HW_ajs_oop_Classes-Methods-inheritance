export default class Character {

  constructor(name, type) {

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const typeHeroes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie'
    ];

    if (typeof name !== 'string') {
      throw new Error('Ошибка! Имя должно быть строкой!');
    };

    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! количество символов в имени от 2 до 10!');
    };

    if (!typeHeroes.includes(type)) {
      throw new Error('Ошибка! Такой персонаж не существует!');
    };
  };

  levelUp() {

    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить уровень умершего!');
    };
    return 1;
  };

  damage(points) {

    this.health = (this.health > 0) ? this.health -= points * (1 - this.defence / 100) : 0;
  };
};
