import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const PageTable = (props: any) => {
  // const [diff, setDiff] = useState();
  const [tableData, setTableData] = useState([]);
  const columns = [
    { field: "date", headerName: "Start_Date", width: 150 },
    { field: "region", headerName: "Region", width: 200 },
    { field: "store", headerName: "Store", width: 200 },
    { field: "review", headerName: "Review", width: 100 },
    { field: "rating", headerName: "Rating", width: 100 },
    // { field: "end_date", headerName: "End_Date", width: 150 },
    // { field: "end_review", headerName: "Review", width: 100 },
    // { field: "end_rating", headerName: "Rating", width: 100 },
    // {
    //   field: "diff",
    //   headerName: "Diff",
    //   width: 100,
    // },
  ];

  useEffect(() => {
    // if (props.click === true) {
    console.log("button worked");
    fetch("")
      .then((data) => data.json())
      .then((data) => setTableData(data));
    // }
  }, []);

  return (
    <>
      <div className="tables">
        { (props.click===true)? 
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={12}
          components={{
            Toolbar: GridToolbar,
          }}
          initialState={{
            filter: {
              filterModel: {
                items: [
                  {
                    columnField: "date",
                    id: "70958",
                    operatorValue: "equals",
                    value: props.value[0],
                  },
                ],
              },
            },
          }}
        />
        : <></>
       } 
      </div>
    </>
  );
};

export default PageTable;
