import React from 'react';
import './components.css';

const BodyField = (props: any) => {
  return (
    <div className="form-field">
      <label>
        {props.label}
      </label>
        <input
          name="Body"
          type='text'
          value={props.name}
          onChange={props.handleName}
        />
    </div>
  );
}

export default BodyField;
