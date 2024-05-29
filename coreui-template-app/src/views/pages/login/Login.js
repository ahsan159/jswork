import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  })
  const uNavigate = useNavigate()

  const onUserDetailChange = (evt) => {
    const cname = evt.target.name
    const cvalue = evt.target.value
    setUserDetails((pre) => {
      return {
        ...pre,
        [cname]: cvalue,
      }
    })
  }

  const processlogin = () => {
    axios
      .post('http://localhost:8000/api/login', userDetails)
      .then((data) => {
        console.log(data)
        if (data.data.status == 'true') {
          // alert(data.data.message)
          sessionStorage.setItem(
            'currentUser',
            JSON.stringify({ token: data.data.token, username: userDetails.email }),
          )
          uNavigate('/dashboard')
          dispatch({ type: 'login', name: userDetails.email, email: userDetails.email })
        } else {
          alert('please login again')
        }
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status == 401) {
          alert(err.response.data.message)
        }
      })
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="email"
                        autoComplete="email"
                        value={userDetails.email}
                        name={'email'}
                        onChange={onUserDetailChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={userDetails.password}
                        name={'password'}
                        onChange={onUserDetailChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={processlogin}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
