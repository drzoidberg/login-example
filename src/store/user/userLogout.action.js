import constants from '../constants'

const { fulfilled, rejected } = constants.status
const { initialised, logged_out } = constants.payload.meta
const { USER_LOGOUT } = constants.type

export default function userLogout() {
  // here would be the log out logic
  return async function (dispatch) {
    try {
      dispatch({
        type: USER_LOGOUT,
        payload: {
          status: fulfilled,
          user: {},
          meta: logged_out,
        },
      })
    } catch (error) {
      dispatch({
        type: USER_LOGOUT,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (${error.message})`,
          meta: initialised,
        },
      })
    }
  }
}
