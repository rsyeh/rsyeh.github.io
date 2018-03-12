export default (updates) => {
  // stop scrolling here
  return {
    type: 'store',
    actions: {
      updateAppStateNavigation: {
        location: ['appState', 'navigation'],
        updateFunction: ({ fromJS }, val) => {
          return(
            fromJS(Object.assign({}, val.toJS(), updates))
          )
        }
      }
    }
  }
}
