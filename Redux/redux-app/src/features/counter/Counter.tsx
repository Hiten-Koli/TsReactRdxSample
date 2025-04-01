import  { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks'

import { decrement, increment, reset, incrementByAmount } from './counterSlice'

export function Counter() {
    const [amount, setAmount] = useState<number>(0)
  // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    const handleIncreament=()=>{
        dispatch(increment())
    }
    const handleDecreament=()=>{
        dispatch(decrement())
    }
    const handleReset=()=>{
        dispatch(reset())
    }
    const handleIncAmount=()=>{
        dispatch(incrementByAmount(amount))
    }
  return (
    <div className='container'>
        <button onClick={handleIncreament}>+</button>
        <p>Count : {count}</p>
        <button onClick={handleDecreament}>-</button>
        <button onClick={handleReset}>Reset</button>
        <br/>
        <input type="Number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}  placeholder='enter amount'/>
        <button onClick={handleIncAmount}>IncAmount</button>
    </div>
  )
}