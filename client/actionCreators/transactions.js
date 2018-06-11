import TRANSACTIONS from '../actionTypes/transactions';

export const gotTransactions = transactions => ({
  type: TRANSACTIONS.GOT_TRANSACTIONS,
  payload: {
    status: 'loaded',
    transactions
  }
});

export const gotSingleTransaction = transaction => ({
  type: TRANSACTIONS.GOT_SINGLETRANSACTION,
  payload: {
    status: 'loaded',
    transaction
  }
});

export const addedTransaction = newTransaction => ({
  type: TRANSACTIONS.ADDED_TRANSACTION,
  payload: {
    status: 'loaded',
    newTransaction
  }
});

export const editedTransaction = (id, modifiedTransaction) => ({
  type: TRANSACTIONS.EDITED_TRANSACTION,
  payload: {
    status: 'loaded',
    modifiedTransaction,
    id
  }
});

export const removedTransaction = id => ({
  type: TRANSACTIONS.REMOVED_TRANSACTION,
  payload: {
    status: 'loaded',
    id
  }
});
