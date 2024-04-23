import { React, useState } from "react";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import axios from "axios";
import dayjs from "dayjs";
import "./TableComponent.css";
import { extractValidationProps } from "@mui/x-date-pickers/internals";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
// import Clock from "react-live-clock";

const sendDelete = (params) => {
  console.log(params);
  axios
    .delete("http://localhost:8000/api/medicines", { data: params })
    .then((response) => {
      console.log(response);
      alert(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "start", headerName: "Start" },
  { field: "end", headerName: "end" },
  {
    field: "edit",
    headerName: "Edit",
    Selection: false,
    renderCell: (params) => {
      return (
        // <button
        //   className="tableButton"
        //   onClick={() => {
        //     alert("I clicked edit");
        //     console.log(params.row);
        //     sendDelete(params.row);
        //   }}
        // >
        //   Edit
        // </button>
        <IconButton onClick={()=>
        {
          alert("Clicked Edit Button");
          console.log(params.row);
          sendDelete(params.row);
        }}><EditIcon></EditIcon></IconButton>
      );
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    Selection: false,
    renderCell: (params) => {
      return (
        // <button
        //   className="tableButton"
        //   onClick={() => {
        //     alert("I am clicked to delete the selected row");
        //     console.log(params.row);
        //     sendDelete(params.row);
        //   }}
        // >
        //   Delete
        // </button>
        <IconButton
          onClick={() => {
            alert("I am clicked to delete the selected row");
            console.log(params.row);
            sendDelete(params.row);
          }}
        >
          <DeleteIcon></DeleteIcon>
        </IconButton>
      );
    },
  },
];

const DataGridComponent = (props) => {
  return (
    <>
      {/* <h1>{dataTable.length}</h1> */}
      <DataGrid
        columns={columns}
        rows={props.datatable}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={true}
        disableRowSelectionOnClick={true}
      ></DataGrid>
    </>
  );
};

export default DataGridComponent;
