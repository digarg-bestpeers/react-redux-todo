import { ADD_NAME, DELETE_NAME } from "./nameTypes"


const intialState = {
    data: []
}


const nameReducer = (state=intialState, action) => {
    switch(action.type){
        case ADD_NAME:
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        case DELETE_NAME:
            const names = state.data.filter( (name) => state.data.indexOf(name) !== action.payload)
            return {
                ...state,
                data: names
            }

        default: return state
    }
}


export default nameReducer;