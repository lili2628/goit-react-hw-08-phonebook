import React, { memo,  useEffect  } from 'react';
import { useSelector} from 'react-redux';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactItem from "./ContactItem";
import { Container, Title, SubTitle, ContactContainer } from './App.styled';
import { getContacts} from 'store/selectors';
import { fetchContacts } from 'store/operations';
import { useDispatch } from 'react-redux';

function App() { 
  const dispatch = useDispatch();
  const contacts  = useSelector(getContacts);

  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
              <ContactContainer>
          <SubTitle>Contacts ({contacts.length})</SubTitle>
                  <Filter />
                  <ContactList>
                    <ContactItem />
                  </ContactList>
              </ContactContainer>
      </Container>
    );
  }


export default memo(App);


