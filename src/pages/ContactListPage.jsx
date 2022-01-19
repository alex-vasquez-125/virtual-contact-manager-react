import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import ContactForm from "../components/ContactForm";

const dummyContacts = [
  {
    id: 1,
    firstName: "Bender",
    middleName: "Bending",
    lastName: "Rodriguez",
    phoneNumber: "12345678",
    cellPhoneNumber: "12345678",
    emailAddress: "bender@email.com",
    address: "planet express ave new new york",
    addressState: "new york",
    addressZipCode: "000000",
    genderSelection: "male",
  },
  {
    id: 2,
    firstName: "philip",
    middleName: "j",
    lastName: "fry",
    phoneNumber: "12345678",
    cellPhoneNumber: "12345678",
    emailAddress: "philip-j-fry@email.com",
    address: "planet express ave new new york",
    addressState: "new york",
    addressZipCode: "000000",
    genderSelection: "male",
  },
  {
    id: 3,
    firstName: "Turanga",
    middleName: "",
    lastName: "Leela",
    phoneNumber: "4566789",
    cellPhoneNumber: "12367894",
    emailAddress: "leela@email.com",
    address: "123 cyclops drive new new york",
    addressState: "new york",
    addressZipCode: "000000",
    genderSelection: "female",
  },
];

let idCounter = 4;

function ContactListPage() {
  const [checkedList, setCheckedList] = useState([]);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contacts, setContacts] = useState(dummyContacts);
  const [contactToEdit, setContactToEdit] = useState(undefined);

  const handleListItemCheckboxClick = (value) => {
    const currentIndex = checkedList.indexOf(value);
    const newCheckedList = [...checkedList];

    if (currentIndex === -1) {
      newCheckedList.push(value);
    } else {
      newCheckedList.splice(currentIndex, 1);
    }

    setCheckedList(newCheckedList);
  };

  const handleAddContactClick = async () => {
    setIsContactFormOpen(true);
  };

  const handleDeleteContactClick = () => {
    checkedList.forEach(function (item) {
      contacts.splice(contacts.indexOf(item), 1);
    });

    setContacts([...contacts]);
    setCheckedList([]);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const saveContact = (
    id,
    firstName,
    middleName,
    lastName,
    phoneNumber,
    cellPhoneNumber,
    emailAddress,
    address,
    addressState,
    addressZipCode,
    genderSelection
  ) => {
    console.log("firstName: ", firstName);
    console.log(`middleName: ${middleName}`);
    console.log(`lastName: ${lastName}`);
    console.log(`phoneNumber: ${phoneNumber}`);
    console.log(`cellPhone: ${cellPhoneNumber}`);
    console.log(`emailAddress: ${emailAddress}`);
    console.log(`address: ${address}`);
    console.log(`addressState: ${addressState}`);
    console.log(`addressZipCode: ${addressZipCode}`);
    console.log(`genderSelection: ${genderSelection}`);

    if (id) {
      let found = false; // todo find better way to do this
      let currentIndex = 0;

      while (!found) {
        if (contacts[currentIndex].id === id) {
          found = true;
          contacts[currentIndex] = {
            id: id,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            cellPhoneNumber: cellPhoneNumber,
            emailAddress: emailAddress,
            address: address,
            addressState: addressState,
            addressZipCode: addressZipCode,
            genderSelection: genderSelection,
          };
        }
        currentIndex++;
      }
    } else {
      const newContact = {
        id: idCounter++,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        cellPhoneNumber: cellPhoneNumber,
        emailAddress: emailAddress,
        address: address,
        addressState: addressState,
        addressZipCode: addressZipCode,
        genderSelection: genderSelection,
      };

      setContacts([...contacts, newContact]);
    }

    closeContactForm();
  };

  const editContact = (contact) => {
    setContactToEdit(contact);
    setIsContactFormOpen(true);
  };

  // TODO: Since I've been away from material UI the ListItem with button=true has been deprecated in favor of ListItemButton
  return (
    <div>
      <Paper elevation={5}>
        <List>
          {contacts.map((contact) => {
            const labelId = `checkbox-list-secondary-label-${contact.id}`;
            return (
              <ListItem
                key={contact.id}
                button
                onClick={() => handleListItemCheckboxClick(contact)}
              >
                <ListItemAvatar>
                  <Avatar alt={`Avatar: ${contact.id}`} />
                </ListItemAvatar>
                <ListItemText id={labelId}>
                  {contact.firstName} {contact.middleName} {contact.lastName}
                </ListItemText>
                <ListItemIcon>
                  <Checkbox
                    onChange={() => handleListItemCheckboxClick(contact)}
                    checked={checkedList.indexOf(contact) !== -1}
                  />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <IconButton onClick={() => editContact(contact)}>
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Divider variant="middle" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <IconButton
            aria-label="add"
            onClick={handleAddContactClick}
            style={{ display: "flex", flex: 1 }}
          >
            <AddCircleIcon />
          </IconButton>
          <IconButton
              aria-label="delete"
              onClick={handleDeleteContactClick}>
            <DeleteIcon />
          </IconButton>
        </div>
        <ContactForm
          isContactFormOpen={isContactFormOpen}
          closeContactForm={closeContactForm}
          saveContact={saveContact}
          contactToEdit={contactToEdit}
        />
      </Paper>
    </div>
  );
}

export default ContactListPage;

// TODO: left off trying to select the "add" button
