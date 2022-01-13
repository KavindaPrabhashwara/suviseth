import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label className='logging__labelStyle' >{ label }</label>
      <input className='logging__inputStyle' ref={ ref } type={ type } />
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
    <form className='logging__formStyle' onSubmit={ handleSubmit } >
      <Field ref={ firstnameRef } label="First Name:" type="text" />
      <Field ref={ secondnameRef } label="Second Name:" type="text" />
      <Field ref={ emailRef } label="Email:" type="text" />
      <Field ref={ passwordRef } label="Password:" type="password" />
      <Field ref={ confirmpasswordRef } label="Confirm Password:" type="password" />
      <div>
        <button className='logging__submitStyle' type="submit">Register</button>
      </div>
    </form>
  );
};

// Usage example:

const Register = () => {
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




export default Register;