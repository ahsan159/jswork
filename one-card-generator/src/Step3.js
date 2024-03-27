import React from "react";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Step3 = (props) => {
  return (
    <>
            
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            "DatePicker",
            "MobileDatePicker",
            "DesktopDatePicker",
            "StaticDatePicker",
          ]}
        >
          <StaticDatePicker
            defaultValue={dayjs()}
            label="Date of Birth"
            format="DD/MM/YYYY"
            value={props.pcikedDate}
            onChange={(newValue)=>{props.pickDate(newValue)}}
          ></StaticDatePicker>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default Step3;
