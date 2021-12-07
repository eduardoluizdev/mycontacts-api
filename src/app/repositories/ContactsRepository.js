const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Eduardo',
    email: 'hello@eduardoluiz.dev',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: '2cf27042-c118-4b3a-b88f-b8bbf80482fe',
    name: 'Maria Alice',
    email: 'malice@eduardoluiz.dev',
    phone: '123123123',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
