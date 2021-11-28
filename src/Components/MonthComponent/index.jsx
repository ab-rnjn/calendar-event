import React, { useState } from "react";
import { Grid, Form, Header, Message, Container } from 'semantic-ui-react';
import EventComponent from "../EventComponent";

const Months = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];

export default function MonthComponent() {

  const [currentMonth, setCurrentMonth] = useState(null);

  const handleMonthSelection = (month) => setCurrentMonth(month);

  return (
    <div className="row m-3">
      <div className="col-md-4">
        <Grid columns={3} >
          {Months.map((month, monthIndex) =>
            <Grid.Column >
              <div className="cursor-pointer border box" onClick={() => handleMonthSelection(monthIndex + 1)}>
                {month}
              </div>
            </Grid.Column>)}
        </Grid>
      </div>
      <div className="col-md-8">
        {currentMonth && <EventComponent currentMonth={currentMonth} />}
      </div>
    </div>
  );
}