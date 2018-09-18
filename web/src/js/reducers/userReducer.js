import userActions from '../actions/userActions';

const actionTypes = userActions.actionTypes;

export default function(state, action) {
    switch (action.type) {
        // case actionTypes.REGISTER_USER_REQUEST:
        //     return {
        //         ...state,
        //         status: ''
        //     }
        default:
            return state;
    }
}