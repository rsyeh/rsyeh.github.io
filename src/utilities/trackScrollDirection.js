import mastermind from './../mastermind'

export default () => {

  // initialize local variables used for comparison
  let lastScrollHeight = window.pageYOffset
  let lastScrollDirection = undefined
  let wasNearTopOnLastScroll = window.pageOffYOffset < window.innerHeight * 0.65

  //update on scroll events
  window.addEventListener('scroll', () => {

    let currentScrollHeight = window.pageYOffset

    // check if local direction has changed
    // update store if local variable has changed
    if (lastScrollHeight - currentScrollHeight > 0) {

      if (lastScrollDirection != 'up') {

        lastScrollDirection = 'up'

        mastermind.update('updateVerticalScrollState', { lastDirectionScrolled: 'up' })

      }

    } else {

      if (lastScrollDirection != 'down') {

        lastScrollDirection = 'down'

        mastermind.update('updateVerticalScrollState', { lastDirectionScrolled: 'down' })

      }

    }

    // update local variables
    lastScrollHeight = currentScrollHeight

  })

}
