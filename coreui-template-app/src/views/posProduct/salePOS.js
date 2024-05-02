import { CButton, CContainer } from '@coreui/react'
import { DataGrid } from '@mui/x-data-grid'

import React, { useState } from 'react'

const salePOS = () => {
    let [saleItems,updateSaleItems] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        {field:'price',headerName:'Price'},
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
      <h1> This will be main sale point</h1>
      <p>This is the page where we will sales items to the customer</p>

      <div className="container d-flex flex-column justify-content-center align-align-items-center">
        <div className="container d-flex flex-row justify-content-start mx-4">
          <CButton color="success" className="w-10 mx-">
            Insert item
          </CButton>
          <CButton color="primary" className="w-10 mx-2">
            Print
          </CButton>
        </div>
        <CContainer className='my-4'>
          <DataGrid
            className="col-md-10 mx-4"
            columns={columns}
            rows={saleItems}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 10 } },
            }}
            pageSizeOptions={[5, 10]}
            autoHeight
            // checkboxSelection={true}
          ></DataGrid>
        </CContainer>
      </div>
    </>
  )
}

export default salePOS
