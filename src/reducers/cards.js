export default function cards (state = [], action) {
    switch (action.type) {
        case 'ADD_CARD':
            return [ ...state, {
                id: Math.random(),
                typeId: action.typeId,
                text: action.text,
                title: action.title,
            }];
        default:
            return state;
    }
}