import React from 'react'

const Form = () => {
  return (
        <form className='form'>
          <span class="form__span"></span>
          <input className='form__input' type="text" placeholder='Create a new todo…'/>
          <button type='submit'>Submit</button>
        </form>
  )
}

export default Form