import { DELETE_INPUT, UPDATE_INPUT_FIELD } from "../Actions/InputActions";

const initialState = {
    inputValues: {}
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT_FIELD:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    [action.payload.name]: action.payload.value
                }
            };

        case DELETE_INPUT:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    [action.payload.name]: action.payload.value
                }
            };
        default:
            return state;
    }
};

export default inputReducer;
