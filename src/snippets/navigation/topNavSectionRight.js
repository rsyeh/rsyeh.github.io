import React from 'react'

export default (content, component) => {
  const { topNavItems } = content
  return(
    <div className="top-nav-section--right">
      {
        topNavItems.map(item => {
          const { displayText } = item
          return(
            <div
              onMouseEnter={() => component.showSubMenu(displayText)}
              className="top-nav-item text-center">
              { displayText }
            </div>
          )
        })
      }
    </div>
  )
}
