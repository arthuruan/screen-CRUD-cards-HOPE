export function addCard(text, title, typeId) {
    return { 
        type: 'ADD_CARD',
        typeId,
        text,
        title,
    }
}