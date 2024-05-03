import React, { useState } from 'react'
import ProductsTable from './productsTable'
import AddMedicine from './AddMedicine'
import { CButton, CContainer, CRow, CTooltip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibAddthis, cibClojure, cilLibraryAdd, cilRecycle } from '@coreui/icons'

const Products = () => {
  let [citem, updateItems] = useState([])
  let [addVisibility, updateAddVisibility] = useState(true)
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
            </div>
            <div className="col-md-8">{addVisibility && <AddMedicine></AddMedicine>}</div>
          </CRow>
        </div>
        <ProductsTable item={citem}></ProductsTable>
      </div>
    </>
  )
}

export default Products
