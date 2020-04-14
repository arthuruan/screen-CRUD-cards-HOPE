import api from '../../services/api';
import { readCards, addCard } from '../ducks/cards';

export const getAllCards = () => {
    return (dispatch) => {
        api.get('/').then((res) => {
            dispatch(readCards(res.data.cards));
        }).catch(console.log);
    }
}

export const addCardFetch = (card) => {
    return (dispatch) => {
        api.post('/create_card', card).then((res) => {
            dispatch(addCard(res.data))
        }).catch(console.log);
    }
}