export default function cards (state = [], action) {
    switch (action.type) {
        case 'ADD_CARD':
            return [ ...state, {
                id: Math.random(),
                typeId: action.typeId,
                text: action.text,
                title: action.title,
            }];
        case 'DELETE_CARD':
            return deleteCard(state, action.id);
        case 'EDITE_CARD':
            return editeCard(state, action.card);
        default:
            return state;
    }
}

const deleteCard = (state, id) => {
    return state.filter((card) => card.id != id);
}

const editeCard = (state, upCard) => {
    state.forEach(card => {
        if(card.id == upCard.id) {
            card = upCard;
            return null;
        }
    });
    return state;
}
