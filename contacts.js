const fs = require("fs/promises");
const path = require("path");

const contactsPath = require("./db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    const contacts = JSON.parse(data);
    console.log("List of contacts: ");
    console.table(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find((contact) => {
      if (contact.id === contactId) {
        console.log(`Get contact by ID ${contactId}:`);
        console.table(contact);
        return contact;
      }
    });

    if (contact == null) {
      console.log(`Contact with ID "${contactId}" not found!`);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    const contacts = JSON.parse(data);
    const newContact = contacts.filter((contact) => contact.id !== contactId);

    if (newContact.length === contacts.length) {
      console.log(
        `Contact with ID "${contactId}" don't removed! ID "${contactId}" not found!`
      );
      return;
    }

    console.log("Contact deleted successfully! New list of contacts: ");
    console.table(newContact);

    fs.writeFile(contactsPath, JSON.stringify(newContact), (err) => {
      if (err) {
        return console.log("err :", err);
      }
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    const contacts = JSON.parse(data);

    contacts.push({
      id: contacts.length + 1,
      name: name,
      email: email,
      phone: phone,
    });

    console.log(" New lists of contacts: ");
    console.table(contacts);

    fs.writeFile(contactsPath, JSON.stringify(contacts), (err) => {
      if (err) {
        return console.log(err);
      }
    });
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
