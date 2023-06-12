import React, {useState} from 'react';
import { Form, FormData, FormInput, AddBtn } from './ContactForm.styled'; 
import { addContact } from 'store/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getLoading } from 'store/contacts/selectors';
import LoaderRing from 'components/LoaderRing';
import AddIcon from '@mui/icons-material/Add';


function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNumber = e => {
    setNumber(e.target.value);
  };

  const resetForm = () => {
    setName('');
    setNumber(''); 
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase())) {
      alert(`${e.target.elements.name.value} is already in contact`);
    } else {
       dispatch(addContact({ name, number}));
    };

    resetForm();
  };


    return (
      <Form onSubmit={onSubmitForm}>
        <FormData>
            <FormInput
              type="text"
              name="name"
              value={name}
              label="Name"
              variant="filled"
              color="secondary"
              onChange={onChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <FormInput
              type="tel"
              name="number"
              value={number}
              label="Number"
              variant="filled"
              color="secondary"
              onChange={onChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </FormData>

        {!isLoading && (
          <AddBtn type="submit" variant="contained" color="primary">
             Add contact
           </AddBtn>
        )}
        {isLoading && <LoaderRing />}
       
      </Form>
    );
  }
    


export default ContactForm;



