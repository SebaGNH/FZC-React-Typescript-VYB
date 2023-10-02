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
    //  ...state, hacemos una copia  y sobrescribimos los valores
    case 'increment':  {
      const newCount = state.count +1;
      const hasError = newCount > 5;
      return state = { ...state, count: state.count +1 , error: hasError? 'Máximo 5' : ''}
    }
    case 'decrement': return (
      state = { ...state, count: state.count -1 , error: null}
    )

    default:
      return state;
  }

}



export const CSCounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='container'>
      <ButtonBack />
      <h1>Contador Cosden Solution</h1>

      <h2>{state.count} <span className='mx-2'>{state.error}</span></h2>

      <button
        className='btn btn-primary mx-1'
        onClick={ () => dispatch({ type: 'increment'})}
      >
        Incrementar
      </button>

      <button
        className='btn btn-primary mx-1'
        onClick={() => dispatch({ type: 'decrement'})}
      >
        Decrementar
      </button>

    </div>
  )
}
