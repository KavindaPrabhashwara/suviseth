import React from 'react';
import ReactDOM from 'react-dom';
import marry from '../marry.jpg';
import './Login.css';

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label className='labelStyle' >{ label }</label>
      <input className='inputStyle' ref={ ref } type={ type } />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const firstnameRef = React.useRef();
  const secondnameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmpasswordRef = React.useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstname: firstnameRef.current.value,
      secondname: secondnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmpasssword: confirmpasswordRef.current.value
    };
    onSubmit(data);
  };
  return (
    <form className='formStyle' onSubmit={ handleSubmit } >
      <Field ref={ firstnameRef } label="First Name:" type="text" />
      <Field ref={ secondnameRef } label="Second Name:" type="text" />
      <Field ref={ emailRef } label="Email:" type="text" />
      <Field ref={ passwordRef } label="Password:" type="password" />
      <Field ref={ confirmpasswordRef } label="Confirm Password:" type="password" />
      <div>
        <button className='submitStyle' type="submit">Register</button>
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
    <div className='appStyle'>
      <Form onSubmit={ handleSubmit } />
    </div>
  );
};




export default Registration;