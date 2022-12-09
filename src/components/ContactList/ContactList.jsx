import React from 'react';
import {
  List,
  Item,
  BlockItem,
  BtnDelete,
  SpanName,
} from './ContactListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contactSlice';
import { useEffect } from 'react';

const ContactsList = () => {
  const dispatch = useDispatch();
  const { items, error, isLoading } = useSelector(state => state.root.contacts);
  const filter = useSelector(state => state.root.filters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {items
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(el => (
          <Item key={el.id}>
            <BlockItem>
              <div>
                <SpanName>{el.name}: </SpanName>
                <SpanName>{el.phone}</SpanName>
              </div>
              <BtnDelete
                type="click"
                name={el.id}
                onClick={() => dispatch(deleteContact(el.id))}
              >
                Delete
              </BtnDelete>
            </BlockItem>
          </Item>
        ))}
      {isLoading && <h2>Loading</h2>}
      {error && <h2>Error: {error}</h2>}
    </List>
  );
};

export default ContactsList;
