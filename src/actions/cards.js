export function addCard(text, title, typeId, id) {
    return { 
        type: 'ADD_CARD',
        id,
        typeId,
        text,
        title,
    }
}