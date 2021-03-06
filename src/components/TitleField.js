import React from 'react';
import './components.css';

const TitleField = (props: any) => {
  return (
    <div className="form-field">
      <label>
        {props.label}
      </label>
        <input
          name="title"
          type='text'
          value={props.name}
          onChange={props.handleName}
        />
    </div>
  );
}

export default TitleField;
