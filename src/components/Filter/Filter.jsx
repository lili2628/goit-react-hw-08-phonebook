import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filterSlice';
import { FilterLable, FilterInput } from './Filter.styled';
import { getContacts, getError, getFilter } from 'store/selectors';


function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
 
  
  return (
    <>
       {
      contacts.length > 0 && !error && (
        <FilterLable>Find contacts by name
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </FilterLable>
      )
    }
  </>
  );
}

export default Filter;

