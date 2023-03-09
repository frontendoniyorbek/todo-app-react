import React from 'react'

const Header = () => {
  return (
    <div className='header__top'>
        <div className='header__container'>
          <h1 class="header__title">Todo</h1>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" fill-rule="evenodd" d="M15.372.216C10.593 1.2 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21a10.47 10.47 0 0 0 7.612-3.267C23.219 22.573 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0c.81 0 1.603.074 2.372.216Z" clip-rule="evenodd"/></svg>
          </div>
        </div>
    </div>
  )
}

export default Header