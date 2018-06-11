import {
  gotTransactions,
  gotSingleTransaction,
  removedTransaction,
  addedTransaction,
  editedTransaction
} from '../actionCreators/transactions.js';
import axios from 'axios';

export const getTransactions = () => async dispatch => {
  try {
    const allTransactions = await axios.get('/api/transactions');
    const transactions = allTransactions.data;
    dispatch(gotTransactions(transactions));
  } catch (err) {
    console.error(err);
  }
};

export const getSingleTransaction = id => async dispatch => {
  try {
    const singleTransaction = await axios.get(`/api/transactions/${id}`);
    const transaction = singleTransaction.data;
    dispatch(gotSingleTransaction(transaction));
  } catch (err) {
    console.error(err);
  }
};

export const addTransaction = transactionInfo => async dispatch => {
  try {
    const newTransaction = await axios.post(
      `/api/transactions/`,
      transactionInfo
    );
    const { data } = newTransaction;
    dispatch(addedTransaction(data));
  } catch (err) {
    console.error(err);
  }
};

export const editTransaction = id => async dispatch => {
  try {
    const modifiedTransaction = await axios.get(`/api/transactions/${id}`);
    const oldTransaction = modifiedTransaction.data;
    dispatch(editedTransaction(id, oldTransaction));
  } catch (err) {
    console.error(err);
  }
};

export const removeTransaction = id => async dispatch => {
  try {
    await axios.delete(`/api/transactions/${id}`, id);
    dispatch(removedTransaction(id));
  } catch (err) {
    console.error(err);
  }
};
