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

  /// following code allows user inputs
  let fields = ['name', 'formula', 'manufacturer', 'expiry_date', 'unitquantity', 'unitrate']
  let [cfields, updatedcfields] = useState({
    name: '',
    formula: '',
    manufacturer: '',
    expiry_date: '',
    unitquantity: '',
    unitrate: '',
  })

  const onChangeEvent = (event) => {
    let cname = event.target.name
    let cvalue = event.target.value
    updatedcfields((previousData) => {
      return {
        ...previousData,
        [cname]: cvalue,
      }
    })
  }
  // end of user input part

  // table columns using mui data grid
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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <CCard className="col-md-8 col-sm-8">
        <CCardHeader>Add Products</CCardHeader>
        <CCardBody>
          <CForm>
            <CInputGroup className="mb-2">
              <CInputGroupText className="col-sm-3">Product Name</CInputGroupText>
              <CFormInput
                name={fields[0]}
                onChange={onChangeEvent}
                value={cfields.name}
              ></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className="col-sm-3">Formula</CInputGroupText>
              <CFormInput
                name={fields[1]}
                onChange={onChangeEvent}
                value={cfields.formula}
              ></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className="col-sm-3">Manufacturer</CInputGroupText>
              <CFormInput
                name={fields[2]}
                onChange={onChangeEvent}
                value={cfields.manufacturer}
              ></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className="col-sm-3">Expiry</CInputGroupText>
              <CFormInput
                name={fields[3]}
                onChange={onChangeEvent}
                value={cfields.expiry_date}
              ></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className="col-sm-3">Quantity</CInputGroupText>
              <CFormInput
                name={fields[4]}
                onChange={onChangeEvent}
                value={cfields.unitquantity}
              ></CFormInput>
            </CInputGroup>
            <CInputGroup className="mb-2">
              <CInputGroupText className="col-sm-3">Rate</CInputGroupText>
              <CFormInput
                name={fields[5]}
                onChange={onChangeEvent}
                value={cfields.unitrate}
              ></CFormInput>
            </CInputGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton
            color="primary"
            className="mx-2"
            onClick={() => {
              console.log(cfields)
            }}
          >
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
