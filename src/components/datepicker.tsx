import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import { PageTable } from ".";


export default function DatePicker(props:any) {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  function generateReport(value:any) {
    return(
      console.log(value)
    )}

  return (
    <>
      <div className="page">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText="Start-date"
          endText="End-date"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          renderInput={(startProps: any, endProps: any) => (
            <React.Fragment>
              <TextField elevation={1} {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField elevation={1} {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
      <Button variant="contained" color="primary" endIcon={<SummarizeRoundedIcon/>} onClick={generateReport}>
        Generate Report
      </Button>
      </div>
      <PageTable value={value}/>
    </>
  );
}



