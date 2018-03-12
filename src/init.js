import mastermind from './mastermind'
import activateSocketActivity from './activateSocketActivity'
import {
  trackScreenWidthBreakpoint,
  trackScrollDirection,
  trackScrollLocation,
} from './utilities'

export default () => {

  console.log('RUNNING INIT')

  trackScreenWidthBreakpoint()

  trackScrollDirection()

  trackScrollLocation()

  // activateSocketActivity()

}
