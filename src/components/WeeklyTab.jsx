import {FormControl, FormGroup, FormControlLabel , Checkbox} from '@mui/material'
import React from "react";

export default function WeeklyTab({ daysOfWeek, setDaysOfWeek }) {
    const handleDayOfWeekChange = (event) => {
      const { value } = event.target;
      const currentIndex = daysOfWeek.indexOf(value);
      const newDaysOfWeek = [...daysOfWeek];
  
      if (currentIndex === -1) {
        newDaysOfWeek.push(value);
      } else {
        newDaysOfWeek.splice(currentIndex, 1);
      }
  
      setDaysOfWeek(newDaysOfWeek);
    };
  
    return (
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={daysOfWeek.includes("0")} onChange={handleDayOfWeekChange} value="0" />}
            label="Sunday"
          />
          <FormControlLabel
            control={<Checkbox checked={daysOfWeek.includes("1")} onChange={handleDayOfWeekChange} value="1" />}
            label="Monday"
          />
          <FormControlLabel
            control={<Checkbox checked={daysOfWeek.includes("2")} onChange={handleDayOfWeekChange} value="2" />}
            label="Tuesday"
          />
          <FormControlLabel
            control={<Checkbox checked={daysOfWeek.includes("3")} onChange={handleDayOfWeekChange} value="3" />}
            label="Wednesday"
          />
          <FormControlLabel
            control={<Checkbox checked={daysOfWeek.includes("4")} onChange={handleDayOfWeekChange} value="4" />}
            label="Thursday"
          />
          <FormControlLabel
            control={<Checkbox checked={daysOfWeek.includes("5")} onChange={handleDayOfWeekChange} value="5" />}
            label="Friday"
          />
          <FormControlLabel
            control={<Checkbox checked={daysOfWeek.includes("6")} onChange={handleDayOfWeekChange} value="6" />}
            label="Saturday"
          />
        </FormGroup>
      </FormControl>
    );
  }
  
