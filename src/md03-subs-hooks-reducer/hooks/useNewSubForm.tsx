import { useReducer } from "react";
import { SubI } from "../interfaces";

const initialState = {
  nick: '',
  email:'',
  description: ''
}

interface FormState {
  inputV: SubI;
}

type FormReducerAction = {
  type: "change_value",
  payload:{
    inputName:string,
    inputValue: string
  }
} | {
  type: "clear"
}

const formReducer = (state: FormState["inputV"], action: FormReducerAction) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue} = action.payload;
      return {
        ...state,
        [inputName]: inputValue
      }
    case "clear":
      return initialState;
  }
}


export const useNewSubForm = () => {
  return useReducer(formReducer, initialState);
}





