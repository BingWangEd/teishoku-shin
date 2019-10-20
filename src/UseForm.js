import React from 'react';
import UseFormHook from './UseFormHook';
import './App.css';

function UseForm() {
  const [firstName, setFirstNameBind, resetFirstName] = UseFormHook()
  const [lastName, setLastNameBind, resetLastName] = UseFormHook()

  const submit = (e)=>{
    e.preventDefault()
    alert(`${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
	return (
		<div>
      <h1>{firstName} {lastName}</h1>
      <form onSubmit={submit}>
        <div>
          <label>First Name</label>
          <input field='text' {...setFirstNameBind}/>
        </div>
        <div>
          <label>Last Name</label>
          <input field='text' {...setLastNameBind}/>
        </div>
        <button>Go</button>
        <button>Which one!!??</button>
      </form>
		</div>
	)
}

export default UseForm;