import React from "react";
import "./Step.css";

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
      <div className="datePicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={[
              "DatePicker",
              "MobileDatePicker",
              "DesktopDatePicker",
              "StaticDatePicker",
            ]}
          >
            <DatePicker
              className="datePicker"
              defaultValue={dayjs()}
              label="Date of Birth"
              format="DD/MM/YYYY"
              value={props.pcikedDate}
              onChange={(newValue) => {
                props.pickDate(newValue);
              }}
            ></DatePicker>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Step3;
