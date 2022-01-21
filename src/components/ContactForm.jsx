import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ContactForm(props) {
  const [id, setId] = useState(undefined);

  const [fistName, setFirstName] = useState(undefined);
  const [firstNameHelperText, setFirstNameHelperText] = useState(undefined);
  const [isFirstNameInErrorState, setIsFirstNameInErrorState] = useState(false);

  const [middleName, setMiddleName] = useState(undefined);
  const [middleNameHelperText, setMiddleNameHelperText] = useState(undefined);
  const [isMiddleNameInErrorState, setIsMiddleNameInErrorState] = useState(
    false
  );

  const [lastName, setLastName] = useState(undefined);
  const [lastNameHelperText, setLastNameHelperText] = useState(undefined);
  const [isLastNameInErrorState, setIsLastNameInErrorState] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [phoneNumberHelperText, setPhoneNumberHelperText] = useState(undefined);
  const [isPhoneNumberInErrorState, setIsPhoneNumberInErrorState] = useState(
    false
  );

  const [cellPhoneNumber, setCellPhoneNumber] = useState(undefined);
  const [cellPhoneNumberHelperText, setCellPhoneNumberHelperText] = useState(
    undefined
  );
  const [
    isCellPhoneNumberInErrorState,
    setIsCellPhoneNumberInErrorState,
  ] = useState(false);

  const [emailAddress, setEmailAddress] = useState(undefined);
  const [emailAddressHelperText, setEmailAddressHelperText] = useState(
    undefined
  );
  const [isEmailAddressInErrorState, setIsEmailAddressInErrorState] = useState(
    false
  );

  const [address, setAddress] = useState(undefined);
  const [addressHelperText, setAddressHelperText] = useState(undefined);
  const [isAddressInErrorState, setIsAddressInErrorState] = useState(false);

  const [addressState, setAddressState] = useState(undefined);
  const [addressStateHelperText, setAddressStateHelperText] = useState(
    undefined
  );
  const [isAddressStateInErrorState, setIsAddressStateInErrorState] = useState(
    false
  );

  const [addressZipCode, setAddressZipCode] = useState(undefined);
  const [addressZipCodeHelperText, setAddressZipCodeHelperText] = useState(
    undefined
  );
  const [
    isAddressZipCodeInErrorState,
    setIsAddressZipCodeInErrorState,
  ] = useState(false);

  const [genderSelection, setGenderSelection] = useState("");
  const [
    isGenderSelectionInErrorState,
    setIsGenderSelectionInErrorState,
  ] = useState(false);

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    if (props.contactToEdit) {
      setId(props.contactToEdit.id);
      setFirstName(props.contactToEdit.firstName);
      setMiddleName(props.contactToEdit.middleName);
      setLastName(props.contactToEdit.lastName);
      setPhoneNumber(props.contactToEdit.phoneNumber);
      setCellPhoneNumber(props.contactToEdit.cellPhoneNumber);
      setEmailAddress(props.contactToEdit.emailAddress);
      setAddress(props.contactToEdit.address);
      setAddressState(props.contactToEdit.addressState);
      setAddressZipCode(props.contactToEdit.addressZipCode);
      setGenderSelection(props.contactToEdit.genderSelection);
    }
  }, [props.contactToEdit]);

  useEffect(() => {
    setIsContactFormOpen(props.isContactFormOpen);
  }, [props.isContactFormOpen]);

  const handleCloseAddContactForm = () => {
    props.closeContactForm();

    clearAllFormValues();
  };

  const handleSaveContact = () => {
    if (
      fistName &&
      middleName &&
      lastName &&
      phoneNumber &&
      cellPhoneNumber &&
      emailAddress &&
      address &&
      addressState &&
      addressZipCode &&
      genderSelection
    ) {
      // save
      props.saveContact(
        id,
        fistName,
        middleName,
        lastName,
        phoneNumber,
        cellPhoneNumber,
        emailAddress,
        address,
        addressState,
        addressZipCode,
        genderSelection
      );

      clearAllFormValues();
    } else {
      if (!fistName) {
        setIsFirstNameInErrorState(true);
        setFirstNameHelperText("Please provide a first name");
      }

      if (!lastName) {
        setIsLastNameInErrorState(true);
        setLastNameHelperText("Please provide a last name");
      }

      if (!middleName) {
        setIsMiddleNameInErrorState(true);
        setMiddleNameHelperText("Please provide a middle name");
      }

      if (!phoneNumber) {
        setIsPhoneNumberInErrorState(true);
        setPhoneNumberHelperText("Please provide a phone number");
      }

      if (!cellPhoneNumber) {
        setIsCellPhoneNumberInErrorState(true);
        setCellPhoneNumberHelperText("Please provide a cell phone number");
      }

      if (!emailAddress) {
        setIsEmailAddressInErrorState(true);
        setEmailAddressHelperText("Please provide an email address");
      }

      if (!genderSelection) {
        setIsGenderSelectionInErrorState(true);
      }

      if (!address) {
        setIsAddressInErrorState(true);
        setAddressHelperText("Please provide an address");
      }

      if (!addressZipCode) {
        setIsAddressZipCodeInErrorState(true);
        setAddressZipCodeHelperText("Please provide a zip code");
      }

      if (!addressState) {
        setIsAddressStateInErrorState(true);
        setAddressStateHelperText("Please provide a state");
      }
    }
  };

  const clearAllFormValues = () => {
    setId("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setPhoneNumber("");
    setCellPhoneNumber("");
    setEmailAddress("");
    setAddress("");
    setAddressState("");
    setAddressZipCode("");
    setGenderSelection("");
  };

  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value);

    if (isFirstNameInErrorState) {
      setIsFirstNameInErrorState(false);
      setFirstNameHelperText(undefined);
    }
  };

  const handleLastNameInput = (event) => {
    setLastName(event.target.value);

    if (isLastNameInErrorState) {
      setIsLastNameInErrorState(false);
      setLastNameHelperText(undefined);
    }
  };

  const handleMiddleNameInput = (event) => {
    setMiddleName(event.target.value);

    if (isMiddleNameInErrorState) {
      setIsMiddleNameInErrorState(false);
      setMiddleNameHelperText(undefined);
    }
  };

  const handlePhoneNumberInput = (event) => {
    // todo: add check to make sure input is a number
    // https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
    setPhoneNumber(event.target.value);

    if (isPhoneNumberInErrorState) {
      setIsPhoneNumberInErrorState(false);
      setPhoneNumberHelperText(undefined);
    }
  };

  const handleCellPhoneNumberInput = (event) => {
    setCellPhoneNumber(event.target.value);

    if (isCellPhoneNumberInErrorState) {
      setIsCellPhoneNumberInErrorState(false);
      setCellPhoneNumberHelperText(undefined);
    }
  };

  const handleEmailAddressInput = (event) => {
    setEmailAddress(event.target.value);

    if (isEmailAddressInErrorState) {
      setIsEmailAddressInErrorState(false);
      setEmailAddressHelperText(undefined);
    }
  };

  const handleAddressInput = (event) => {
    setAddress(event.target.value);

    if (isAddressInErrorState) {
      setIsAddressInErrorState(false);
      setAddressHelperText(undefined);
    }
  };

  const handleAddressStateInput = (event) => {
    setAddressState(event.target.value);

    if (isAddressStateInErrorState) {
      setIsAddressStateInErrorState(false);
      setAddressStateHelperText(undefined);
    }
  };

  const handleAddressZipCodeInput = (event) => {
    setAddressZipCode(event.target.value);

    if (isAddressZipCodeInErrorState) {
      setIsAddressZipCodeInErrorState(false);
      setAddressZipCodeHelperText(undefined);
    }
  };

  const handleGenderSelection = (event) => {
    setGenderSelection(event.target.value);

    if (isGenderSelectionInErrorState) {
      setIsGenderSelectionInErrorState(false);
    }
  };

  return (
    <Dialog open={isContactFormOpen} onClose={handleCloseAddContactForm}>
      <DialogTitle>Add new contact</DialogTitle>
      <DialogContent>
        <DialogContentText>Add contact details</DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
                id="first-name"
                error={isFirstNameInErrorState}
                label="First Name"
                variant="outlined"
                helperText={firstNameHelperText}
                onChange={handleFirstNameInput}
                required={true}
                value={fistName}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="middle-name"
              error={isMiddleNameInErrorState}
              label="Middle Name"
              variant="outlined"
              helperText={middleNameHelperText}
              onChange={handleMiddleNameInput}
              value={middleName}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={isLastNameInErrorState}
              id="last-name"
              label="Last Name"
              variant="outlined"
              helperText={lastNameHelperText}
              onChange={handleLastNameInput}
              value={lastName}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={isCellPhoneNumberInErrorState}
              id="cell-phone-number"
              label="Cell Phone Number"
              variant="outlined"
              helperText={cellPhoneNumberHelperText}
              onChange={handleCellPhoneNumberInput}
              value={cellPhoneNumber}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={isPhoneNumberInErrorState}
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              helperText={phoneNumberHelperText}
              onChange={handlePhoneNumberInput}
              value={phoneNumber}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={isEmailAddressInErrorState}
              id="email-address"
              label="Email Address"
              variant="outlined"
              helperText={emailAddressHelperText}
              onChange={handleEmailAddressInput}
              value={emailAddress}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={isAddressInErrorState}
              id="address"
              label="Address"
              variant="outlined"
              helperText={addressHelperText}
              onChange={handleAddressInput}
              value={address}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={isAddressStateInErrorState}
              id="state"
              label="State"
              variant="outlined"
              helperText={addressStateHelperText}
              onChange={handleAddressStateInput}
              value={addressState}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              error={isAddressZipCodeInErrorState}
              id="zip-code"
              label="Zip Code"
              variant="outlined"
              helperText={addressZipCodeHelperText}
              onChange={handleAddressZipCodeInput}
              value={addressZipCode}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              component="fieldset"
              error={isGenderSelectionInErrorState}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                value={genderSelection}
                onChange={handleGenderSelection}
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="nonbinary"
                  control={<Radio />}
                  label="Non-binary"
                />
                <FormControlLabel
                  value="preferNotToAnswer"
                  control={<Radio />}
                  label="Prefer Not To Answer"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <DialogActions>
          <IconButton
              onClick={handleSaveContact}
              aria-label="submit-new-contact-dialog-btn"
          >
            <AddCircleIcon />
          </IconButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  isContactFormOpen: PropTypes.bool,
  closeContactForm: PropTypes.func,
  saveContact: PropTypes.func,
  contactToEdit: PropTypes.any,
};
