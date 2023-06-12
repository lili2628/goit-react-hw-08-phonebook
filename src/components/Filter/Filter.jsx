import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/contacts/filterSlice';
import { FilterInput } from './Filter.styled';
import { getContacts, getError, getFilter } from 'store/contacts/selectors';


function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
 
  
  return (
    <>
       {
      contacts.length > 0 && !error && (
          <FilterInput
            type="text"
            name="filter"
            variant="standard"
            label="Find contacts by name"
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
      )
    }
  </>
  );
}

export default Filter;

