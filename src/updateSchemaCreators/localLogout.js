export default () => {

  return {
    type: 'store',
    actions: {
      RemoveUserFromAuth: {
        location: ['auth', 'user'],
      }
    }
  }
}
