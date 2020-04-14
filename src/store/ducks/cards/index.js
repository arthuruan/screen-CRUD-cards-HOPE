import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addCard = createAction('ADD_CARD');
export const readCards = createAction('READ_CARDS');
export const deleteCard = createAction('DELETE_CARD');
export const editCard = createAction('EDITE_CARD');

export default createReducer(INITIAL_STATE, {
    [addCard.type]: (state, action) => [...state, action.payload],
    [readCards.type]: (state, action) => [...action.payload],
    [editCard.type]: (state, action) => (console.log('Card editado com sucesso!!')),
    [deleteCard.type]: (state, action) => (console.log('Card deletado com sucesso!!')),
});