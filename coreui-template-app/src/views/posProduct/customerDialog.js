import {
  CContainer,
  CButton,
  CFooter,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { CallToAction, WidthFull } from '@mui/icons-material'
import { ListItemSecondaryAction } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'

const CustomerDialog = (props) => {
  const [visibility, setVisibility] = useState(false)
  const [customerName, setCustomerName] = useState('walkin customer')

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'customer_type', headerName: 'Type' },
    { field: 'name', headerName: 'Name' },
    { field: 'contact', headerName: 'Contact' },
    { field: 'address', headerName: 'Address', WidthFull: true },
  ]
  return (
    <>
      <CInputGroup className="mb-2 px-2">
        <CInputGroupText className="col-sm-4">Customer</CInputGroupText>
        <CFormInput onClick={() => setVisibility(true)} value={customerName}></CFormInput>
      </CInputGroup>
      <CModal
        alignment="center"
        size="lg"
        scrollable
        backdrop={'static'}
        keyboard={false}
        visible={visibility}
        onClose={() => setVisibility(false)}
      >
        <CModalHeader>
          <CModalTitle>Select Customer</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput placeholder="inputfiter"></CFormInput>
          <CContainer>
            <DataGrid
              autoHeight
              checkboxSelection={true}
              disableMultipleRowSelection={true}
              disableRowSelectionOnClick={false}
              columns={columns}
              rows={props.data}
              initialState={{
                pagination: { paginationModel: { page: 0, pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10]}
              onRowSelectionModelChange={(id) => {
                console.log(id);
                try {
                  setCustomerName(props.data[id[0] - 1].name)
                } catch (err) {
                  setCustomerName(undefined)
                }
                console.log(customerName)
              }}
            ></DataGrid>
          </CContainer>
        </CModalBody>
        <CFooter>
          <CButton
            color="secondary"
            onClick={() => {
                console.log("inclose");
                console.log(customerName);
              props.updateCurrentCustomer('walkin customer')
              setVisibility(false)
            }}
          >
            Close
          </CButton>
          <CButton
            disabled={false}
            color="primary"
            onClick={() => {
              console.log(customerName)
              if (customerName != undefined) {
                console.log("inadd");
                console.log(customerName);
                props.updateCurrentCustomer(customerName)
                setVisibility(false)
              }
            }}
          >
            Add
          </CButton>
        </CFooter>
      </CModal>
    </>
  )
}

export default CustomerDialog
