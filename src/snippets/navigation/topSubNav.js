import React from 'react'


export default (content, component) => {

  const { topSubNavItems } = content
  const { topSubNavMenuOptions } = component.props.appState.navigation

  return(
    <div className={`sub-nav ${topSubNavMenuOptions ? 'open' : ''}`}>
      <i
        onClick={component.hideSubMenu.bind(this)}
        className="window close outline icon" />
      {
        topSubNavMenuOptions && topSubNavItems[topSubNavMenuOptions] &&
        <div className="row just-cent">
          {
            topSubNavItems[topSubNavMenuOptions].map(item => {
              const { displayText } = item
              return(
                <div className="col-2 sub-nav-item text-center"> {displayText} </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}
