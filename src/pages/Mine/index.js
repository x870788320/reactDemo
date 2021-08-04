import React, { memo } from "react";

const LoginComponent = props => {
    const { route } = props
    console.log(props.history)

    return (
        <div  onClick = { e => props.history.push('/login')}>Mine</div>
    )
}

export default memo(LoginComponent)