import axios from 'axios'

export const logoutUser = (dispatch,navigate) => {
  try {
    let data = sessionStorage.getItem('currentUser')
    console.log(data)
    data = JSON.parse(data)
    let header = { Accept: 'application/json', Authorization: `Bearer ${data.token}` }
    console.log(header)
    axios
      .get('http://localhost:8000/api/logout', { headers: header })
      .then((data) => {
        console.log(data)
        dispatch({ type: 'logout' })
        sessionStorage.removeItem('currentUser')
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log('error arrived')
        console.log(err)
      })
  } catch (e) {
    console.log(e)
  }
}
