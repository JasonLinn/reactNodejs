import { FETCH_USER } from '../actions/types';


export default function(state = null, action) { //給予state初始空值
    // console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state; //回傳原本的state
    }
};