import React from "react";
import { TextField } from "@mui/material";

export default function CustomTab({ cronExpression, setCronExpression }) {
  const handleCronExpressionChange = (event) => {
    setCronExpression(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Cron Expression"
        value={cronExpression}
        onChange={handleCronExpressionChange}
        fullWidth
        multiline
        rows={4}
      />
    </div>
  );
}

