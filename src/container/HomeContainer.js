import React, { memo } from 'react'
import  { renderRoutes }  from "../router/renderRoutes";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


export default memo(function HomeContainer(props) {
  // props/state
    const { route } = props
    console.log(route)

    const { loginStatus }  = useSelector( state => state.indexRe, shallowEqual)
    // console.log(loginStatus)
    return (
        <div>
            <div>header</div>
            {/* 这里的路由需要登录认证 */}
            {renderRoutes(route.routes, loginStatus)}
            <div>footer</div>
        </div>
    )
})
