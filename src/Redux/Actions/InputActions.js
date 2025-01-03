export const UPDATE_INPUT_FIELD = 'UPDATE_INPUT_FIELD';
export const DELETE_INPUT = 'DELETE_INPUT'

export const InputField = (name, value) => ({
    type: UPDATE_INPUT_FIELD,
    payload: { name, value }
});

export const DeleteInput = (name,value) =>({
    type:DELETE_INPUT,
    payload:{name,value}
});

export default InputField;
