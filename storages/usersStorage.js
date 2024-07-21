// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {
      99: {
        id: 99,
        firstName: "Nsikak",
        lastName: "Ekott",
        email: "nsikak@gmail.com",
        age: 13,
        bio: null,
      },
    };
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    console.log(this.storage);
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }
  search({ name, email }) {
    return Object.values(this.storage).filter((x) => {
      x.name = `${x.firstName} ${x.lastName}`;
      return (
        x.name.toLowerCase().includes(name ?? "") &&
        x.email.toLowerCase().includes(email ?? "")
      );
    });
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
