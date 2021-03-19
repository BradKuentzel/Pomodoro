import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function Controls({
  focus,
  breakTime,
  setFocus,
  setBreak,
  setCountdown,
  disableControls,
}) {
  const focusDecrease = () => {
    setFocus((prevTime) => Math.max(5, prevTime - 5));
    setCountdown((prevTime) => Math.max(300, prevTime - 5 * 60));
  };
  const focusIncrease = () => {
    setFocus((prevTime) => Math.min(60, prevTime + 5));
    setCountdown((prevTime) => Math.min(3600, prevTime + 5 * 60));
  };
  const breakTimeDecrease = () => {
    setBreak((prevTime) => Math.max(1, prevTime - 1));
  };
  const breakTimeIncrease = () => {
    setBreak((prevTime) => Math.min(15, prevTime + 1));
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focus)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={focusDecrease}
              disabled={disableControls}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={focusIncrease}
              disabled={disableControls}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakTime)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={breakTimeDecrease}
                disabled={disableControls}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={breakTimeIncrease}
                disabled={disableControls}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
