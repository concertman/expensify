import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense action object', () => {
  const action = removeExpense({ id: 1 });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 1,
  });
});

test('should setup editExpense action object', () => {
  const action = editExpense('2', { note: 'value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '2',
    updates: {
      note: 'value',
    },
  });
});

test('should setup addExpense action object', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'last rent',
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should set up addExpense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
