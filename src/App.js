import React, { useState } from "react";
import { Tabs, Tab, TextField, Button } from "@mui/material";
import "./App.css";
// import { CronValidator } from "cron-validator";
import  CustomTab from "./components/CustomTab";
import  WeeklyTab  from "./components/WeeklyTab";
import  DailyTab  from "./components/DailyTab";
function generateCronExpression(tabValue, daysOfWeek, minute, hour, useAt, dayOfMonth, cronExpression) {
  switch (tabValue) {
    case 0:
      return `* * * * ${daysOfWeek.join(",")}`;
    case 1:
      if (useAt) {
        return `${minute} ${hour} ${dayOfMonth} * *`;
      } else {
        return `${minute} ${hour} * * *`;
      }
    case 2:
      return `${minute} ${hour} ${dayOfMonth} * *`;
    case 3:
      return cronExpression;
    default:
      return "";
  }
}
//const { initialState, setTabValue, setDaysOfWeek, setMinute, setHour, setUseAt, setDayOfMonth, setCronExpression } = props;
function App() {
  const [tabValue, setTabValue] = useState(0);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [minute, setMinute] = useState("0");
  const [hour, setHour] = useState("0");
  const [useAt, setUseAt] = useState(false);
  const [dayOfMonth, setDayOfMonth] = useState("1");
  const [cronExpression, setCronExpression] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleDayOfMonthChange = (event) => {
    setDayOfMonth(event.target.value);
  };
  const handleDownloadClick = () => {
    const expression = generateCronExpression(tabValue, daysOfWeek, minute, hour, useAt, dayOfMonth);
    const fileContent = `Generated cron expression: ${expression}`;
    const fileName = 'schedule.txt';
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleButtonClick = () => {
    const expression = generateCronExpression(tabValue, daysOfWeek, minute, hour, useAt, dayOfMonth);
    alert(`Cron expression: ${expression}`);
  };

  return (
    <div className="App">
      <h1 className="Title">Cron Expression Generator</h1>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Weekly" />
        <Tab label="Daily" />
        <Tab label="Monthly" />
        <Tab label="Custom" />
      </Tabs>
      {tabValue === 0 && <WeeklyTab daysOfWeek={daysOfWeek} setDaysOfWeek={setDaysOfWeek} />}
      {tabValue === 1 && (
        <DailyTab
          minute={minute}
          setMinute={setMinute}
          hour={hour}
          setHour={setHour}
          useAt={useAt}
          setUseAt={setUseAt}
          dayOfMonth={dayOfMonth}
          setDayOfMonth={setDayOfMonth}
        />
      )}
      {tabValue === 2 && (
        <div>
          <TextField
            type="number"
            label="Minute"
            value={minute}
            onChange={handleMinuteChange}
            inputProps={{ min: 0, max: 59 }}
          />
          <TextField
            type="number"
            label="Hour"
            value={hour}
            onChange={handleHourChange}
            inputProps={{ min: 0, max: 23 }}
          />
          <TextField
            type="number"
            label="Day of Month"
            value={dayOfMonth}
            onChange={handleDayOfMonthChange}
            inputProps={{ min: 1, max: 31 }}
          />
        </div>
      )}
      {tabValue === 3 && (
        <CustomTab cronExpression={cronExpression} setCronExpression={setCronExpression} />
      )}
      <Button variant="contained" onClick={handleButtonClick}>
        Generate
      </Button>
      <Button variant="contained" onClick={handleDownloadClick}>
        Load
      </Button>
    </div>
  );
}

export default App;