import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css"; // or globalizeLocalizer

import {fetchAPI} from './requestAPI'

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIxNiIsIkNvbXBhbnlJRCI6IjEiLCJDb21wYW55Um9sZSI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDb21wYW55IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiY29tcGFueTFAY29tcGFueS5jb20iLCJVc2VyVHlwZSI6IjIiLCJUaWNrZXRzIjoiIiwiU2VydmljZXMiOiIiLCJCYWxhbmNlIjoiIiwiTG9jYXRpb25zIjoiIiwiVXNlcnMiOiIiLCJleHAiOjE2NjUxNzQyNTAsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCJ9.UNW6BQUYsuXXq0AZyEYgblMLsrNmGM2GR5kEVvDpllM"

const localizer = momentLocalizer(moment)

function App() {


  const state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  return (
    <div className="App">
      <div className="myCustomHeight" style={{height:"100%"}}>
        <Calendar
          localizer={localizer}
          events={state.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100vh" }}
          onSelectSlot={console.log}
          step={15}
          selectable
        />
      </div>
    </div>
  );
}

export default App;
