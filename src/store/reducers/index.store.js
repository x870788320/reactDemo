

import * as indexActionType from '../actionTypes/index.type';
// export const getHttpAction = (url, func) => (dispatch) => {
//     axios.get(url).then(function(res){
//         const action = func(res.data)
//         dispatch(action)
//     })
// }
const indexState = {
    loginStatus: indexActionType.LOGIN_STATUS_NO,
    currentListId: 1,
    userGrade: 'v1',
}

const indexRe = (state = indexState, action) => {
    switch(action.type){
        case indexActionType.CHANGE_LOGIN_STATUS:
            return { ...state, loginStatus: action.id }
        case 'CHANGE_CURRENT_LIST':
            return {
                ...state,
                currentListId: action.id
            }
        default:
            return state
    }
}

export default indexRe