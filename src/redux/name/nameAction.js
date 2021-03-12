import { ADD_NAME, DELETE_NAME } from "./nameTypes"


export const nameAddAction = (message) => {
    return {
        type: ADD_NAME,
        payload: message
    }
}


export const nameDelAction = (id) => {
    return {
        type: DELETE_NAME,
        payload: id
    }
}
