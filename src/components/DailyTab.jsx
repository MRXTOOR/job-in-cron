import React from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

export default  function DailyTab({ minute, setMinute, hour, setHour, useAt, setUseAt, dayOfMonth, setDayOfMonth }) {
  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleDayOfMonthChange = (event) => {
    setDayOfMonth(event.target.value);
  };

  const handleRadioChange = (event) => {
    setUseAt(event.target.value === "at");
  };

  return (
    <div>
      <TextField
        type="number"
        label="Minute"
        value={minute}
        onChange={handleMinuteChange}
        inputProps={{ min: 0, max: 59 }}
      />
      <TextField type="number" label="Hour" value={hour} onChange={handleHourChange} inputProps={{ min: 0, max: 23 }} />
      <FormControl component="fieldset">
        <RadioGroup aria-label="time-type" name="time-type" value={useAt ? "at" : "every"} onChange={handleRadioChange}>
          <FormControlLabel value="every" control={<Radio />} label="Every Day" />
          <FormControlLabel value="at" control={<Radio />} label="Every Day at:" />
        </RadioGroup>
      </FormControl>
      {useAt && (
        <TextField
          type="number"
          label="Day of Month"
          value={dayOfMonth}
          onChange={handleDayOfMonthChange}
          inputProps={{ min: 1, max: 31 }}
        />
      )}
    </div>
  );
}

