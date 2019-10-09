import { LOAD_HALL } from '../actions/constants';

const initialState = {
    loading: true,
    hall: {}
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_HALL:
            return {
                ...state,
                hall: { ...payload },
                loading: false
            };
        default:
            return state;
    }
}