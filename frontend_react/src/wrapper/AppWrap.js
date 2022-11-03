import React from 'react'


const AppWrap = (Component, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <div className='app__wrapper app_flex'>
            <Component />
        </div>
        
    </div>
  )
}

export default AppWrap