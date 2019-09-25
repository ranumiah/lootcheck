import * as constants from '../actions/constants';

const balance = (state = 0, action) => {
    switch (action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        case constants.DEPOSIT:
            return state + action.deposit;
        case constants.WITHDRAWAL:
            return state - action.withdrawal;
        default:
            return balance;
    }
}

export default balance;