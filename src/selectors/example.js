import { createSelector } from 'reselect'

const appStateSelector = state => state.appState.toJS()

const navigationSelector = object => object.navigation

export default createSelector(
  appStateSelector,
  navigationSelector
)
