import { put } from 'redux-saga/effects';

import axios from '../../axios-orders.js';
import * as actions from '../actions/index.js';

export function* initIngredientsSaga(action) {
    yield console.log('initIngredientsSaga');
    try {
        const response = yield axios.get('https://react-my-burger-4801d.firebaseio.com/ingredients.json');
        yield put(actions.setIngredients(response.data));

    } catch(error) {
        yield put(actions.fetchIngredientsFailed());
    }
}