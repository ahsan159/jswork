import { legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'

const initialState = {
  sidebarShow: false,
  theme: 'dark',
}

const changeState = (state = initialState, { type, ...rest }) => {
  console.log(`change State ${JSON.stringify(state)}`)
  console.log(`type:${type}`)
  // console.log(`rest:${{...rest}}`)
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const initialSignin = {
  token: undefined,
  name: 'Login',
  email: undefined,
}

const siginChange = (state = initialSignin, {action,...rest}) => {
  console.log(`signin ${JSON.stringify(state)}`)
  console.log(`action is ${action}`);
  switch (action) {
    case 'login':
      state.token = action.token
      state.name = action.name
      state.email = action.email
      return state
    case 'logout':
      state.token = undefined
      state.name = undefined
      state.name = undefined
      return state
    default:
      return state
  }
}

// const store = createStore(combineReducers({changeState}))
const store = createStore(changeState)
export default store
// export {store2}
