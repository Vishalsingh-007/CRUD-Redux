import React from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from "../state/index"

const Bank = () => {
    const dispatch = useDispatch()
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className='container'>
        <h2>Cash Withdarw/Deposite</h2>
        {/* <span>Withdraw<button className="btn btn-info mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button></span> */}
        {/* <span>Deposit<button className="btn btn-info mx-2" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button></span> */}
        <span>Withdraw<button className="btn btn-info mx-2" onClick={()=>(withdrawMoney(100))}>-</button></span>
        <span>Deposite<button className="btn btn-info mx-2" onClick={()=>(depositMoney(100))}>+</button></span>
    </div>
  )
}

export default Bank