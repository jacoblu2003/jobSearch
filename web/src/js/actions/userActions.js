export default {
    actionTypes: {
        REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST',
        REGISTER_USER_COMPLETE: 'REGISTER_USER_COMPLETE',
        REGISTER_USER_FAIL: 'REGISTER_USER_FAIL'
    },

    updateUser(user) {
        return {
            type: 'UPDATE_USER',
            user
        };
    },

    registerUser(user) {
        return dispatch => {
            dispatch({
                type: this.actionTypes.REGISTER_USER_REQUEST,
                user
            });

            return fetch('api/users/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }).then(newUser => {
                dispatch({
                    type: this.actionTypes.REGISTER_USER_COMPLETE,
                    user: newUser
                });
                return newUser;
            }, () => {
                dispatch({
                    type: this.actionTypes.REGISTER_USER_FAIL,
                    user
                });
                throw new Error("An error occurred registering user");
            });
        }
    }
}