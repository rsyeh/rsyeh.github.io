import screenWidthBreakpoints from './screenWidthBreakpoints'
import mastermind from './../mastermind'

// helper function to determine the breakpoint associated with the current screenwidth
function determineCurrentScreenWidthBreakpoint () {

  const screenWidth = window.innerWidth

  let determinedBreakpoint

  screenWidthBreakpoints.forEach(breakpoint => {

    const { name, minWidth, maxWidth } = breakpoint

    if (screenWidth >= minWidth && screenWidth < maxWidth ) {

      determinedBreakpoint = breakpoint

    }

  })

  return determinedBreakpoint

}

// function that calculates the current breakpoint and updates the store if necessary
export default () => {

  let lastScreenWidthBreakPoint = determineCurrentScreenWidthBreakpoint()

  mastermind.update('setScreenWidthBreakpoint', lastScreenWidthBreakPoint)

  window.addEventListener('resize', () => {

    let currentScreenWidthBreakPoint = determineCurrentScreenWidthBreakpoint()

    if (lastScreenWidthBreakPoint != currentScreenWidthBreakPoint) {

      mastermind.update('setScreenWidthBreakpoint', currentScreenWidthBreakPoint)

      lastScreenWidthBreakPoint = currentScreenWidthBreakPoint

    }

  })

}
