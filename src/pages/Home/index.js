import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd';
import { HOCAuth } from '../../common/checkAuth'
import { test } from '@/interface'

const LoginComponent = props => {
    const { route } = props
    console.log(route)
    
    //组件内数据
    const [count, setCount] = useState({
        id:0,
        num:0
      });

    //redux里的state
    //useSelector默认为深比较 === ，加上shallowEqual 变为浅比较，connect 为浅比较
    const { currentListId }  = useSelector( state => state.homeRe, shallowEqual)
    //redux 方法
    const dispatch = useDispatch()

    //组件内方法
    const jumpTo = e => {
        console.log(e)
        props.history.push('/app/mine')
    }
    const homeClick = e => {
        setCount({
            id:0,
            num: count.num + 1
        }, console.log(count))
        dispatch({ type: 'CHANGE_CURRENT_LIST', id: count.num })
    }

    //接口测试
    console.log(test)
    test().then(res => console.log(res))
    return (
        <div>
            <div onClick = { e => jumpTo(e)}>home</div>
            <Button type="primary" onClick = { _ => homeClick(_) }>Primary Button</Button>
            <div>
                { currentListId }
            </div>
            <div>
                { HOCAuth(<div show_grade = "4">555555555555</div>) }
                {/* <HOCAuth>
                    <div>555555555555</div>
                </HOCAuth> */}
            </div>
        </div>
        
    )
}

export default memo(LoginComponent)