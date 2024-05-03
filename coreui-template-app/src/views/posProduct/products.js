import React, {useState} from 'react'
import ProductsTable from './productsTable'
import AddMedicine from './AddMedicine'

const Products = () => {
  let [citem, updateItems] = useState([])
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col-md-8 col-sm-8">
            <AddMedicine></AddMedicine>
        </div>
        <div className="col-md-8 my-2">
          <ProductsTable item={citem}></ProductsTable>
        </div>
      </div>
    </>
  )
}

export default Products
