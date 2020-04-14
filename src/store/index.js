import { configureStore } from '@reduxjs/toolkit';

import cards from './ducks/cards';//reducer

export default configureStore({
    reducer: {
        cards,
    }
});