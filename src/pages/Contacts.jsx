import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm  from "components/ContactForm";
import  ContactList  from 'components/ContactList';
import  ContactItem from 'components/ContactItem';
import  Filter  from 'components/Filter';
import { getContacts } from 'store/contacts/selectors';
import { Title, ContactContainer, SubTitle, MainContainer } from 'components/App.styled';
import { fetchContacts } from "store/contacts/operations";

function Contacts() {
    const dispatch = useDispatch();
    const contacts  = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <MainContainer>
            <Title>Phonebook</Title>
            <ContactForm />
                <ContactContainer>
            <SubTitle>Contacts ({contacts.length})</SubTitle>
                    <Filter />
                    <ContactList>
                        <ContactItem />
                    </ContactList>
                </ContactContainer>
        </MainContainer>
        );
}

export default Contacts;


