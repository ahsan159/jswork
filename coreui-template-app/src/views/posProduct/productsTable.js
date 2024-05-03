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

const ProductsTable = (props) => {

  
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
    <div>
      {/* <CContainer className="col-md-12 col-sm-8"> */}
      {/* <DataGrid
          className="my-2"
          columns={columns}
          rows={props.items}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10]}
          autoHeight
          // checkboxSelection={true}
        ></DataGrid> */}
      {/* </CContainer> */}
      <CContainer className="col-md-12 col-sm-8">
        <DataGrid
          columns={columns}
          rows={props.item}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          autoHeight
        ></DataGrid>
      </CContainer>
    </div>
  )
}

// export default React.memo(ProductsTable)
export default ProductsTable
