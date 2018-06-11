import TRANSACTIONS from '../actionTypes/transactions';

// Initial State
const initialState = {
  transactions: [],
  singleTransaction: {},
  status: 'unasked'
};

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case TRANSACTIONS.GOT_TRANSACTIONS: {
      return {
        ...state,
        transactions: action.payload.transactions,
        status: action.payload.status
      };
    }
    case TRANSACTIONS.GOT_SINGLETRANSACTION: {
      return {
        ...state,
        singleTransaction: action.payload.transaction,
        status: action.payload.status
      };
    }
    case TRANSACTIONS.ADDED_TRANSACTION: {
      return {
        ...state,
        transactions: [...state.transactions, action.payload.newTransaction],
        status: action.payload.status
      };
    }
    case TRANSACTIONS.EDITED_TRANSACTION: {
      return {
        ...state,
        transactions: [
          ...state.transaction.filter(
            transaction => transaction.id !== action.payload.id
          ),
          action.payload.modifiedTransaction
        ],
        status: action.payload.status
      };
    }
    case TRANSACTIONS.REMOVED_TRANSACTION: {
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            transaction => transaction.id !== action.payload.id
          )
        ],
        status: action.payload.status
      };
    }
    default: {
      return state;
    }
  }
}
