import {
    LOGIN_USER, REGISTER_USER
} from '../_actions/types';

export default function (state = {}, action) {
    // type에 따라 switch문에서 분기를 나눠줘야 코드가 깔끔함
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
            
        default:
            return state;
    }
}