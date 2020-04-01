export function addCard(text, title, typeId) {
    return { 
        type: 'ADD_CARD',
        typeId,
        text,
        title,
    }
}

export function DeleteCard(id) {
    return {
        type: 'DELETE_CARD',
        id,
    }
}

export function EditCard(card) {
    return {
        type: 'EDITE_CARD',
        card
    }
}