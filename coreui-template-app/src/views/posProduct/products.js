import React, { useState } from 'react'
import ProductsTable from './productsTable'
import AddMedicine from './AddMedicine'
import { CButton, CContainer, CRow, CTooltip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibAddthis, cibClojure, cilLibraryAdd, cilRecycle, cilReload } from '@coreui/icons'
import axios from 'axios'
import { Icon, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Edit } from '@mui/icons-material'

const Products = () => {
  let [citem, updateItems] = useState([])

  const refreshTable = () => {
    console.log('refreshing')
    axios
      .get('http://localhost:8000/api/medicines')
      .then((res) => {
        console.log(res)
        updateItems(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  let [addVisibility, updateAddVisibility] = useState(false)
  return (
    <>
      <div>
        <div className="container col-md-12 col-sm-8">
          <CRow className="justify-content-start mb-3">
            <div className="col-md-1">
              <CTooltip content="Click to Add New Product" placement="top">
                <CButton
                  color={!addVisibility ? 'success' : 'danger'}
                  onClick={() => updateAddVisibility(!addVisibility)}
                >
                  {!addVisibility ? (
                    <CIcon icon={cibAddthis}></CIcon>
                  ) : (
                    <CIcon icon={cilRecycle}></CIcon>
                  )}
                </CButton>
              </CTooltip>
              <CTooltip content="Refresh" placement="auto">
                <CButton
                  color="warning"
                  onClick={() => {
                    refreshTable()
                  }}
                >
                  <CIcon icon={cilReload}></CIcon>
                </CButton>
              </CTooltip>
            </div>
            <div className="col-md-8">{addVisibility && <AddMedicine></AddMedicine>}</div>
          </CRow>
        </div>
        <ProductsTable item={citem} refreshTable={updateItems}></ProductsTable>
      </div>
    </>
  )
}

export default Products
