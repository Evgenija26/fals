const contacts = require("./contacts");
// const argv = require("yargs").argv;

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       contacts.listContacts();
//       break;

//     case "get":
//       contacts.getContactById(id);
//       break;

//     case "add":
//       contacts.addContact(name, email, phone);
//       break;

//     case "remove":
//       contacts.removeContact(id);
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
