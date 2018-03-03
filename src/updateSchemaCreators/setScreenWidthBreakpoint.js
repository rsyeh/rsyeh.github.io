export default (value) => {
  return {
    type: 'store',
    actions: {
      setScreenWidthBreakpoint: {
        location: ['appState', 'screenWidthBreakpoint'],
        value,
      }
    }
  }
}
