import { ListItem, InfoContainer, InfoItemContainer, Data, DeleteBtn } from './ContactItem.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import { useEffect } from 'react';
import { getContacts, getError, getFilter, getLoading } from 'store/contacts/selectors';
import { fetchContacts } from 'store/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';


function ContactItem() {
    const dispatch = useDispatch();
    const normalizedFilter = useSelector(getFilter)?.toLowerCase() || '';
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    const visibleContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    useEffect(() => {dispatch(fetchContacts());
                    }, [dispatch]);
    return (
      <>
            {contacts.length > 0 && !error && (
                <>
                    {visibleContacts.map(({ id, name, number }) => {
                        return (     
                            <ListItem key={id}>
                                <InfoContainer>
                                    <InfoItemContainer>
                                        <Data>{name}</Data>
                                    </InfoItemContainer>
                                    <InfoItemContainer>
                                        <Data>{number}</Data>
                                    </InfoItemContainer>
                                </InfoContainer>
                                <DeleteBtn type="button" color="primary" aria-label="delete" onClick={() => dispatch(deleteContact(id))}>
                                    <DeleteIcon />
                                </DeleteBtn>
                            </ListItem>
                        );
                    })}
                </>
            )} 

          {!contacts.length && !error && !isLoading && (
                <p>
                    Your phonebook is empty. Please add contact.
                </p>
            )}
            
            
            {error && error.message }

    </>
    );
}


export default ContactItem;

