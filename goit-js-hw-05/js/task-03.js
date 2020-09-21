"use strict";

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    console.log(this.items);
  }
  addItem(product) {
    this.items.push(product);
  }

  removeItem(product) {
    if (this.items.includes(product)) {
      const deletedItem = this.items.splice(this.items.indexOf(product), 1);
    }

    //  ИЛИ вместо if
    // this.items.includes(product) ? this.items.splice(this.items.indexOf(product), 1) : console.log(`Товар ${product} отсутствует на складе`);
  }
}

// const Storage = function (items) {
//   this.items = items;

//   this.getItems = function () {
//     console.log(this.items);
//   };

//   this.addItem = function (product) {
//     this.items.push(product);
//   };

//   this.removeItem = function (product) {
//     if (this.items.includes(product)) {
//       const deletedItem = this.items.splice(this.items.indexOf(product), 1);
//     }
//   };
// };

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

// console.log(storage);

const items = storage.getItems();
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
