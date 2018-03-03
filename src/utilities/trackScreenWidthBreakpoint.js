import screenWidthBreakpoints from './screenWidthBreakpoints'
import mastermind from './../mastermind'


function determineCurrentScreenWidthBreakpoint () {

  const screenWidth = window.innerWidth

  let breakpointName

  screenWidthBreakpoints.forEach(breakpoint => {

    const { name, minWidth, maxWidth } = breakpoint

    if (screenWidth > minWidth && screenWidth < maxWidth ) {

      breakpointName = name

    }

  })

  return breakpointName

}


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
