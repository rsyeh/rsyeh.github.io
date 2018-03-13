import React from 'react'


export default (content, component) => {

  const { topSubNavItems } = content
  const { topSubNavMenuOptions } = component.props.appState.navigation

  return(
    <div className={`row no-wrap just-cent sub-nav ${topSubNavMenuOptions ? 'open' : ''}`}>

      <i onClick={component.hideSubMenu.bind(this)}
        className="window close outline icon icon-button--close-to-sub-nav" />

        {
          topSubNavMenuOptions && topSubNavItems[topSubNavMenuOptions] &&
            topSubNavItems[topSubNavMenuOptions].map(item => {
              const { displayText } = item
              return(
                <div className="col-2 sub-nav-item text-center"> {displayText} </div>
              )
            })
        }

    </div>
  )
}
