import api from '../../services/api';
import { readCards, addCard, deleteCard, editCard } from '../ducks/cards';

//read cards
export const readCardsFetch = () => {
    return (dispatch) => {
        api.get('/').then((res) => {
            dispatch(readCards(res.data.cards));
        }).catch(console.log);
    }
}
//create cards
export const addCardFetch = (card) => {
    return (dispatch) => {
        api.post('/create_card', card).then((res) => {
            dispatch(addCard(res.data));
        }).catch(console.log);
    }
}
//update cards
export const editCardFetch = (upCard) => {
    return (dispatch) => {
        api.put(`/${upCard._id}`, upCard).then((res) => {
            dispatch(editCard());
        }).catch(console.log);
    }
}
//delete cards
export const deleteCardFetch = (id) => {
    return (dispatch) => {
        api.delete(`/${id}`).then((res) => {
            dispatch(deleteCard());
        }).catch(console.log);
    }
}