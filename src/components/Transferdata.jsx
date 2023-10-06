import React from 'react'
import './tranferdata.css'

const Transferdata = (props) => {
return (
    <div>       
    <h1 className='aa'>WELCOME</h1>
    <p>
        username:&nbsp;
        {props.username}<br/>
        password:&nbsp;
        {props.password}<br/>
        usertype:&nbsp;
        {props.usertype}
    </p>
    </div>
)
}

export default Transferdata