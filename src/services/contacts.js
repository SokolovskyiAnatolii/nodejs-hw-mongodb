import { ContactsCollection } from '../db/models/contacts.js';

export const getContacts = async () => {
  return await ContactsCollection.find();
};

export const getContactById = async (contactId) => {
  return await ContactsCollection.findById(contactId);
};

export const createContact = async (payload) => {
  return await ContactsCollection.create(payload);
};

export const deleteContact = async (contactId) => {
  return await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });
};

export const updateContact = async (contactId, payload) => {
  const result = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
    },
  );
  return result.value;
};
