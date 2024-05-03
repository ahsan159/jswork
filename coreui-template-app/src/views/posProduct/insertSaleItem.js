import React, { useState } from 'react'
import {
  cibAddthis,
  cibCplusplus,
  cilNoteAdd,
  cilPaperclip,
  cilRecycle,
  cilReportSlash,
  cilUser,
  cilUserPlus,
  cilWallpaper,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormText,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'

const InsertSaleItem = () => {
  // code to allow user input data for product entry
  let productFields = ['pname', 'unitrate', 'quantity', 'discount', 'unittotal']
  let [productFieldsInput, updateProductFieldsInput] = useState({
    pname: '',
    unitrate: '',
    quantity: '',
    discount: '',
    unittotal: '',
  })
  const onProductInput = (event) => {
    let cname = event.target.name
    let cvalue = event.target.value
    updateProductFieldsInput((previousData) => {
      return {
        ...previousData,
        [cname]: cvalue,
      }
    })
  }
  return (
    <>
      <CContainer>
        <CForm>
          <CInputGroup className="mb-2">
            <CInputGroupText className="col-sm-4">Product</CInputGroupText>
            <CFormInput
              placeholder="Select Product"
              name={productFields[0]}
              value={productFieldsInput.pname}
              onChange={onProductInput}
            ></CFormInput>
          </CInputGroup>
          <CInputGroup className="mb-2">
            <CInputGroupText className="col-sm-4">Rate/Unit</CInputGroupText>
            <CFormInput
              placeholder="Cost/Unit"
              name={productFields[1]}
              value={productFieldsInput.unitrate}
              onChange={onProductInput}
            ></CFormInput>
          </CInputGroup>
          <CInputGroup className="mb-2">
            <CInputGroupText className="col-sm-4">Quantity</CInputGroupText>
            <CFormInput
              placeholder="Quantity"
              name={productFields[2]}
              value={productFieldsInput.quantity}
              onChange={onProductInput}
            ></CFormInput>
          </CInputGroup>
          <CInputGroup className="mb-2">
            <CInputGroupText className="col-sm-4">Discount</CInputGroupText>
            <CFormInput
              placeholder="Discount"
              name={productFields[3]}
              value={productFieldsInput.discount}
              onChange={onProductInput}
            ></CFormInput>
          </CInputGroup>
          <CInputGroup className="mb-2">
            <CInputGroupText className="col-sm-4">Total Price</CInputGroupText>
            <CFormInput
              placeholder="Total Price"
              name={productFields[4]}
              value={productFieldsInput.unittotal}
              onChange={onProductInput}
            ></CFormInput>
          </CInputGroup>
        </CForm>
        <div className="container d-flex flex-row justify-content-center mx-1 mb-4">
          <CButton color="primary" className="mx-1" onClick={() => console.log(productFieldsInput)}>
            <CIcon icon={cibAddthis}></CIcon>
          </CButton>
          <CButton
            color="warning"
            className="mx-1"
            onClick={() => {
              updateProductFieldsInput({
                pname: '',
                unitrate: '',
                quantity: '',
                discount: '',
                unittotal: '',
              })
            }}
          >
            <CIcon icon={cilRecycle}></CIcon>
          </CButton>
          <CButton color="success" className="mx-1">
            <CIcon icon={cilWallpaper}></CIcon>
          </CButton>
        </div>
      </CContainer>
    </>
  )
}

export default InsertSaleItem
