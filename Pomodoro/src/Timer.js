import React from "react";
import {minutesToDuration, secondsToDuration} from "../utils/duration"

export default function Timer({
  status, 
  countdown,  
  focus, 
  breakTime, 
  clockStop,
  paused
}) {


  
const clock = status === "On Break" ? breakTime : focus; 
const percentage =
    ((clock * 60 - countdown) / (clock * 60)) * 100
  
if(!clockStop) {
  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title"> {status} for {minutesToDuration(clock)} minutes</h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(countdown)} remaining
          </p>
        </div>
      </div>
      <h2>{paused}</h2>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percentage} 
                style={{ width: `${percentage}%` }} 
              />
            </div>
          </div>
        </div>
      </div>
      )
    } else {
    return null
  }
} 