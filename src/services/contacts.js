import createHttpError from 'http-errors';

import { SORT_ORDER } from '../constants/index.js';
import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactQuery = ContactsCollection.find({ userId });

  if (filter.isFavourite) {
    contactQuery.where('isFavourite').equals(filter.isFavourite);
  }

  if (filter.contactType) {
    contactQuery.where('contactType').equals(filter.contactType);
  }

  const contactCount = await ContactsCollection.find({ userId })
    .merge(contactQuery)
    .countDocuments();

  const totalPages = Math.ceil(contactCount / perPage);

  if (page > totalPages && totalPages > 0) {
    throw createHttpError(400, 'Invalid page number');
  }

  const contacts = await contactQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = (contactId, userId) => {
  return ContactsCollection.findOne({ _id: contactId, userId });
};

export const createContact = (payload) => {
  return ContactsCollection.create(payload);
};

export const updateContact = async (contactId, payload, userId) => {
  const updatedContact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    { new: true, includeResultMetadata: true },
  );

  return updatedContact.value;
};

export const deleteContact = (contactId, userId) => {
  return ContactsCollection.findOneAndDelete({
    _id: contactId,
    userId,
  });
};
