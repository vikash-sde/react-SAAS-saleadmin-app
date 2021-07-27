import "./userList.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { DataGrid } from "@material-ui/data-grid";
import { userRow } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserList() {
  const [data, setData] = useState(userRow);
  const handleDelete = (id) => setData(data.filter((item) => item.id !== id));
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userImage" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },

    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
