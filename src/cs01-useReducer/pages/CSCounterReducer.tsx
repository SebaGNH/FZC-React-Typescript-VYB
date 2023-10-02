import React, { useReducer } from 'react';
import { ButtonBack } from '../../components/ButtonBack'

interface StateI {
  count: number;
  error: string | null;
}

interface ActionI {
  type: 'increment' | 'decrement';
}

const initialState: StateI = {
  count: 0,
  error: null
}

const reducer = (state: StateI = initialState, action: ActionI) => {
  const { type } = action;
  switch (type) {
    case 'increment': return (
      state = { count: state.count +1 , error: null}
    )

    default:
      return state;
  }

}



export const CSCounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // onClick
  const handeClick =  () => {
    dispatch({
      type: 'increment'
    });
  }

  return (
    <div className='container'>
      <ButtonBack />
      <h1>Contador Cosden Solution</h1>

      <h2>{state.count}</h2>
      <p>{state.error}</p>

      <button
        className='btn btn-primary'
        onClick={() => handeClick()}
      >
        Incrementar
      </button>

    </div>
  )
}
