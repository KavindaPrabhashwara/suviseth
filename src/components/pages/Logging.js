import React from 'react';
import ReactDOM from 'react-dom';

import './Login.css';

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label className='logging__labelStyle' >{ label }</label>
      <input ref={ ref } type={ type } className='logging__inputStyle' />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };
    onSubmit(data);
  };
  return (
    <form className='logging__formStyle' onSubmit={ handleSubmit } >
      <Field ref={ usernameRef } label="Username:" type="text" />
      <Field ref={ passwordRef } label="Password:" type="password" />
      <div>
        <button className='logging__submitStyle' type="submit">Submit</button>
      </div>
    </form>
  );
};

// Usage example:

const Logging = () => {
  const handleSubmit = data => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };
  return (
    <div className='logging__appStyle'>
      <Form onSubmit={ handleSubmit } />
    </div>
  );
};




export default Logging;