export default ({ email, password }) => {

  return {
    type: 'store',
    actions: {
      addUserToAuth: {
        location: ['auth', 'user'],
        value: { email }
      }
    }
  }
}
