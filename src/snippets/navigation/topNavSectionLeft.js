import React from 'react'

export default (content) => {
  const { logoFileName } = content
  return(
    <div className="top-nav-section--left">
      <img
        className="logo--top-nav-left"
        src={require(`./../../images/logos/${logoFileName || 'bringit--dark.png'}`)} />
    </div>
  )
}
