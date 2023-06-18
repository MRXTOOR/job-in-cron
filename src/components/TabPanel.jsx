// import React from 'react'

// const TabPanel = memo(() => {
//   return (
//     <>
//     <TabPanel value={initialState.tabValue} index={0}>
//     <DaysOfWeek initialState={initialState} setDaysOfWeek={setDaysOfWeek} />
//     <RunEveryMinute setMinute={setMinute} minute={initialState.minute} />
//     <RunEveryHour setHour={setHour} hour={initialState.hour} />
//   </TabPanel>
//   <TabPanel value={initialState.tabValue} index={1}>
//     <UseAt setUseAt={setUseAt} useAt={initialState.useAt} />
//     {initialState.useAt && (
//       <React.Fragment>
//         <DayOfMonth setDayOfMonth={setDayOfMonth} dayOfMonth={initialState.dayOfMonth} />
//         <RunAt setHour={setHour} setMinute={setMinute} hour={initialState.hour} minute={initialState.minute} />
//       </React.Fragment>
//     )}
//   </TabPanel>
//   <TabPanel value={initialState.tabValue} index={2}>
//     <CronExpression initialState={initialState} setCronExpression={setCronExpression} />
//   </TabPanel>
//   </>
//   )
// })

// export default TabPanel