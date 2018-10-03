import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { exec } from 'child_process';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2',
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[2],
  ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'new expense',
    note: 'something about expense',
    amount: 2000,
    createdAt: moment(200),
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    expense,
  ]);
});

test('should edit an expense', () => {
  const amount = 1;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 400,
    updates: {
      amount: 1,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
