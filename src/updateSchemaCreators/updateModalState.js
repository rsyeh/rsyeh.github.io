export default ({ modalName, updates }) => {
  return {
    type: 'store',
    actions: {
      toggleModalState: {
        location: ['appState', 'modals', modalName ],
        updateFunction: ({ fromJS }, val) => {
          return fromJS(Object.assign({}, val.toJS(), updates))
        }
      }
    }
  }
}
