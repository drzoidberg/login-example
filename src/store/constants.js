export default {
  status: {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected',
  },
  type: {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
    USER_ERROR: 'USER_ERROR',
  },
  payload: {
    meta: {
      initialised: 'initialised',
      uninitialised: 'uninitialised',
      logged_in: 'logged_in',
      logged_out: 'logged_in',
    },
  },
}
