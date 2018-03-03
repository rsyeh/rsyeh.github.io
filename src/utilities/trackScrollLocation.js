import mastermind from './../mastermind'
import getDocumentHeight from './getDocumentHeight'


// variables to adjust trigger threshholds
const percentageOfScreenWidthConsideredNearTop = 0.65
const pixelsFromScreenBottomConsideredNearBottom = 120


// helper functions
function isScrolledToTopOfPage () {
  return window.pageYOffset < window.innerHeight * percentageOfScreenWidthConsideredNearTop
}

function isScrolledToBottomOfPage () {
  return getDocumentHeight() - (window.innerHeight + window.pageYOffset) < pixelsFromScreenBottomConsideredNearBottom
}


export default () => {

  // initialize local variable used for comparison
  let wasNearTopOnLastScroll = isScrolledToTopOfPage()
  let wasNearBottomOnLastScroll = isScrolledToBottomOfPage()

  // initialize store values
  if (wasNearTopOnLastScroll) {
    mastermind.update('updateVerticalScrollState', { isNearTop: true })
  }

  if (wasNearBottomOnLastScroll) {
    mastermind.update('updateVerticalScrollState', { isNearBottom: true })
  }

 window.addEventListener('scroll', () => {

    if (isScrolledToTopOfPage() && !wasNearTopOnLastScroll) {

      mastermind.update('updateVerticalScrollState', { isNearTop: true })

      wasNearTopOnLastScroll = true

    } else if (!isScrolledToTopOfPage() && wasNearTopOnLastScroll) {

      mastermind.update('updateVerticalScrollState', { isNearTop: false })

      wasNearTopOnLastScroll = false

    }


    if (isScrolledToBottomOfPage() && !wasNearBottomOnLastScroll) {

      mastermind.update('updateVerticalScrollState', { isNearBottom: true })

      wasNearBottomOnLastScroll = true

    } else if (!isScrolledToBottomOfPage() && wasNearBottomOnLastScroll) {

      mastermind.update('updateVerticalScrollState', { isNearBottom: false })

      wasNearBottomOnLastScroll = false

    }

  })

}
