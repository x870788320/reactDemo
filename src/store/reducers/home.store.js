

// export const getHttpAction = (url, func) => (dispatch) => {
//     axios.get(url).then(function(res){
//         const action = func(res.data)
//         dispatch(action)
//     })
// }
const homeState = {
    currentListId: 1
}

const homeRe = (state = homeState, action) => {
    switch(action.type){
        case 'CHANGE_CURRENT_LIST':
            return {
                ...state,
                currentListId: action.id
            }
        default:
            return state
    }
}

export default homeRe