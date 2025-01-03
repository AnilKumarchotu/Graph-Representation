import React from 'react';
import { connect } from 'react-redux';
import { InputField as inputFieldAction } from './Redux/Actions/InputActions';
import { useSelector,useDispatch } from 'react-redux';

const InputField = ({ name, value, inputFieldAction }) => {
    const handleChange = (event) => {
        inputFieldAction(name, event.target.value);
        console.log(value, "valuevalue");
    };
    
    const Field = useSelector((state)=>state.inputValues.inputReducer)
    const dispatch = useDispatch()
    

    return (
        <div>
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                Field={Field}
            />
            <button>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    value: state.inputValues[ownProps.name] || ''
});

const mapDispatchToProps = {
    inputFieldAction
};

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
