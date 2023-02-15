const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContact = await contacts.listContacts();
      return console.log(allContact);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
       const addContact = await contacts.addContact(name, email, phone);
      return console.log(addContact);;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);;

    default:
      console.log("Unknown action type!");
  }
}

const actionIndex = process.argv.indexOf("--action");
if(actionIndex !== -1){
  const action = process.argv[actionIndex + 1];
  invokeAction({action});
}


// const argv = require("yargs").argv;

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       listContacts();
//       return console.log();;

//     case "get":
//       getContactById(id);
//       return console.log();;

//     case "add":
//       addContact(name, email, phone);
//       return console.log();;

//     case "remove":
//       removeContact(id);
//       return console.log();;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
