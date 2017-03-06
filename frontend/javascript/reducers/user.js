import { events as e } from 'constants';

export default {
    [e.LOGIN]: (state, payload) => {
        return {
            ...state,
            payload,
        }
    },
    [e.LOGOUT]: (state, payload) => {
        return {
            ...state,
            payload,
        }
    },
}