import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import dayjs from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import axios from 'axios'
import 'reactjs-popup/dist/index.css'
// import "./Popup.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'

const postcreate = (drugData) => {
  const postHeader = { 'Access-Control-Allow-Origin': '*' }
  console.log('this will delete last data')
  try {
    axios
      .post('http://localhost:8000/create', drugData, postHeader)
      .then((res) => {
        alert(res.data.message)
      })
      .catch((error) => {
        // console.log(error.response.data);
        // alert(error.response.data.message);
        console.log(error)
      })
  } catch (error) {
    alert(error.response.data)
  }
  console.log('post complete')
}

const AddMedicine = (props) => {
  let [citem, updateItems] = useState([])

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'formula', headerName: 'Formula' },
    { field: 'manufacturer', headerName: 'Manufacturer' },
    { field: 'expiry_date', headerName: 'Expiry' },
    { field: 'unitquantity', headerName: 'Unit Quantity' },
    { field: 'unitrate', headerName: 'Unit Rate' },
    {
      field: 'edit',
      headerName: 'Edit',
      Selection: false,
      // renderCell: (params) => {
      //     return <EditMedicine rowData={params.row} updateData={refreshTable}></EditMedicine>;
      // },
      renderCell: () => {
        return (
          <IconButton>
            <EditIcon color="success"></EditIcon>
          </IconButton>
        )
      },
    },
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
  let [dname, udname] = useState('')
  let [fname, ufname] = useState('')
  let [mname, umname] = useState('')
  let [expiry, uexpiry] = useState(dayjs(Date.now()))
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <CCard className="col-md-8 col-sm-8">
        <CCardHeader>Add Products</CCardHeader>
        <CCardBody>
          <CForm>
            <CInputGroup className="mb-2">
              <CInputGroupText className='col-sm-3'>Product Name</CInputGroupText>
              <CFormInput></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className='col-sm-3'>Formula</CInputGroupText>
              <CFormInput></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className='col-sm-3'>Manufacturer</CInputGroupText>
              <CFormInput></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className='col-sm-3'>Expiry</CInputGroupText>
              <CFormInput></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className='col-sm-3'>Quantity</CInputGroupText>
              <CFormInput></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className='col-sm-3'>Rate</CInputGroupText>
              <CFormInput></CFormInput>
            </CInputGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" className="mx-2" onClick={() => alert('I am Clicked')}>
            Add
          </CButton>
          <CButton color="warning   " className="mx-2">
            Clear
          </CButton>
        </CCardFooter>
      </CCard>
      <CContainer className="col-md-12 col-sm-8">
        <DataGrid
          className="my-2"
          columns={columns}
          rows={citem}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10]}
          autoHeight
          // checkboxSelection={true}
        ></DataGrid>
      </CContainer>
    </div>
  )
}

export default AddMedicine
