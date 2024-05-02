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

import React, { useState } from 'react'

const salePOS = () => {
  let [saleItems, updateSaleItems] = useState([])

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'rate', headerName: 'Unit Cost' },
    { field: 'count', headerName: 'Quantity' },
    { field: 'totalcost', headerName: 'Total Cost' },
    // {field: 'inventory', headerName:'Inventory'},
    {
      field: 'delete',
      headerName: 'Delete',
      Selection: false,
      renderCell: (params) => {
        return (
          <IconButton
            onClick={() => {
              // alert("I am clicked to delete the selected row");
              console.log(params.row)
              sendDelete(params.row)
            }}
          >
            <DeleteIcon color="error"></DeleteIcon>
          </IconButton>
        )
      },
    },
  ]
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Rukhsar Point of Sale</h1>
        </div>
        <div className="d-flex flex-row">
          <CContainer className="my-4 col-md-4">
            <CForm>
              <CInputGroup className="mb-2">
                <CInputGroupText>Product</CInputGroupText>
                <CFormInput placeholder="Select Product"></CFormInput>
              </CInputGroup>
              <CInputGroup className="mb-2">
                <CInputGroupText>Rate/Unit</CInputGroupText>
                <CFormInput placeholder="Cost/Unit" readOnly></CFormInput>
              </CInputGroup>
              <CInputGroup className="mb-2">
                <CInputGroupText>Quantity</CInputGroupText>
                <CFormInput placeholder="Quantity"></CFormInput>
              </CInputGroup>
              <CInputGroup className="mb-2">
                <CInputGroupText>Discount</CInputGroupText>
                <CFormInput placeholder="Discount"></CFormInput>
              </CInputGroup>
              <CInputGroup className="mb-2">
                <CInputGroupText>Total Price</CInputGroupText>
                <CFormInput placeholder="Total Price" readOnly></CFormInput>
              </CInputGroup>
            </CForm>
            <div className="container d-flex flex-row justify-content-center mx-1 mb-4">
              <CButton color="primary" className="mx-1">
                <CIcon icon={cibAddthis}></CIcon>
              </CButton>
              <CButton color="warning" className="mx-1">
                <CIcon icon={cilRecycle}></CIcon>
              </CButton>
              <CButton color="success" className="mx-1">
                <CIcon icon={cilWallpaper}></CIcon>
              </CButton>
            </div>
          </CContainer>
          <CContainer className="my-4 col-md-8 col-sm-8">
            <DataGrid
              className="mb-4"
              columns={columns}
              rows={saleItems}
              initialState={{
                pagination: { paginationModel: { page: 0, pageSize: 10 } },
              }}
              pageSizeOptions={[5, 10]}
              autoHeight
              // checkboxSelection={true}
            ></DataGrid>
            <CForm classname="mx-4">
              <CInputGroup className="my-2">
                <CInputGroupText>Grand Total</CInputGroupText>
                <CFormInput readOnly></CFormInput>
              </CInputGroup>
              <CInputGroup className="my-2">
                <CInputGroupText>Discount</CInputGroupText>
                <CFormInput></CFormInput>
              </CInputGroup>
              <CInputGroup className="my-2">
                <CInputGroupText>Payment</CInputGroupText>
                <CFormInput></CFormInput>
              </CInputGroup>
              <CInputGroup className="my-2">
                <CInputGroupText>Change</CInputGroupText>
                <CFormInput></CFormInput>
              </CInputGroup>
            </CForm>
            <CContainer className="d-flex flex-row justify-content-end">
              <CButton color="primary" className="mx-2">
                Print
              </CButton>
              <CButton color="success" className="mx-2">
                Next
              </CButton>
            </CContainer>
          </CContainer>
        </div>
      </div>
    </>
  )
}

export default salePOS
