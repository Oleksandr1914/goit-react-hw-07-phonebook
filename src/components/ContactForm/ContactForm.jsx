import { useState } from 'react';
import { Form, Label, Input, BtnSubmit } from './ContactFormStyled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

const PhonebookContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.root.contacts.items);

  const onInputText = event => {
    const element = event.currentTarget.value;
    switch (event.target.name) {
      case 'name':
        setName(element);
        break;
      case 'number':
        setNumber(element);
        break;
      default:
        break;
    }
  };

  const onResetInput = () => {
    setNumber('');
    setName('');
  };

  const nameCheck = () => {
    let contactName = true;
    for (const contact of contacts) {
      contact.name.includes(name)
        ? (contactName = false)
        : (contactName = true);
    }
    return contactName;
  };

  const onSubmitForms = ev => {
    ev.preventDefault();
    const obj = { name, number };
    nameCheck()
      ? dispatch(addContact(obj))
      : alert(name + ' is already in contacts');
    onResetInput();
  };

  return (
    <>
      <Form onSubmit={onSubmitForms}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputText}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputText}
          />
        </Label>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </Form>
    </>
  );
};

export default PhonebookContact;
