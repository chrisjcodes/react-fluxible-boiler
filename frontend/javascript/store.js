import { createReducerStore } from 'fluxible-reducer-store';
import { Record } from 'immutable';

import reducers from 'reducers';

const Spec = Record({

});

export default createReducerStore({
    storeName: 'ApplicationStore',
    initialState: Spec(),
    reducers,
    getters: {
        getState: state => state,
    }, 
});

