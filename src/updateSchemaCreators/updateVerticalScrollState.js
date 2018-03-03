export default (updates) => {
  return {
    type: 'store',
    actions: {
      updateAppStateVerticalScroll: {
        location: ['appState', 'verticalScroll'],
        updateFunction: ({ fromJS }, val) => fromJS(Object.assign({}, val.toJS(), updates))
      }
    }
  }
}
