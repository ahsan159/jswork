import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CFormText,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTooltip,
} from '@coreui/react'

const FinalPage = () => {
  return (
    <>
      <CContainer className="vh-100 align-items-center" style={{ backgroundColor: 'blue' }}>
        <CRow className="w-100 h-100">
          <CCol className="w-25d align-self-start" style={{ backgroundColor: 'red' }}>
            <CButton className="my-1" color="primary">
              ClickMe
            </CButton>
          </CCol>
          <CCol className="w-25 align-self-center" style={{ backgroundColor: 'green' }}>
            <CTooltip content="click to test" placement="bottom">
              <CInputGroup>
                <CInputGroupText>@</CInputGroupText>
                <CFormText className="my-1"></CFormText>
              </CInputGroup>
            </CTooltip>
          </CCol>
          <CCol className="align-self-end" style={{ backgroundColor: 'red' }}>
            <CButton className="my-1" color="primary">
              ClickMe
            </CButton>
          </CCol>
        </CRow>
      </CContainer>      
    </>
  )
}

export default FinalPage
