import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { vGradeInfo } from '../../common/checkAuth'

import { CHANGE_LOGIN_STATUS, LOGIN_STATUS_HAS } from '@/store/actionTypes/index.type';

//模拟用户已登录
console.log(vGradeInfo('v4'))

const LoginComponent = props => {
    const { route } = props
    console.log(route)

    const dispatch = useDispatch()

    dispatch({ type: CHANGE_LOGIN_STATUS, id: LOGIN_STATUS_HAS })
    return (
        <div onClick = { e => props.history.push('/')}>login</div>
    )
}

export default memo(LoginComponent)