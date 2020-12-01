import React from 'react';
import './Title.css';

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
