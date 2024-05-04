import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import dayjs from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import axios from 'axios'
import { Icon, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Edit } from '@mui/icons-material'
// import 'reactjs-popup/dist/index.css'
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
  const sendDelete = (params) => {
    console.log(params)
    axios
      .delete('http://localhost:8000/api/medicines', { data: params })
      .then((response) => {
        console.log(response)
        alert(response.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
      <CContainer>
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
