import React, {useState} from 'react';
import { Form, FormData, FormLabel, FormInput, AddBtn } from './ContactForm.styled'; 
import { addContact } from 'store/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getLoading } from 'store/selectors';
import  LoaderRing from 'components/LoaderRing';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNumber = e => {
    setPhone(e.target.value);
  };

  const resetForm = () => {
    setName('');
    setPhone(''); 
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase())) {
      alert(`${e.target.elements.name.value} is already in contact`);
    } else {
       dispatch(addContact({ name, phone}));
    };

    resetForm();
  };


    return (
      <Form onSubmit={onSubmitForm}>
        <FormData>
          <FormLabel>
            Name
            <FormInput
            type="text"
            name="name"
            value={name}
            onChange={onChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </FormLabel>
        
          <FormLabel>
            Number
            <FormInput
              type="tel"
              name="phone"
              value={phone}
              onChange={onChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
        </FormData>

        {!isLoading && (
          <AddBtn type="submit">
             Add contact
           </AddBtn>
        )}
        {isLoading && <LoaderRing />}
       
      </Form>
    );
  }
    


export default ContactForm;



