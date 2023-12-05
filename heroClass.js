class Hero {
  types = ["guerreiro", "mago", "monge", "ninja"];
  attacks = ["espada", "magia", "artes marciais", "shuriken"];

  constructor(name, age, type) {
    if (type < 0 || type > 3) type = Math.floor(Math.random() * 4);
    this.name = name;
    this.age = age;
    this.type = this.types[type];
    this.attack = this.attacks[type];
  }
  atacar() {
    console.log(`O ${this.type} atacou usando ${this.attack}.`);
  }
}

const hero = new Hero("Link", 15, 1);
hero.atacar();
