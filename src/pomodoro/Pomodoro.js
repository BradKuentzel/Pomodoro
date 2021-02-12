import React, { useState, useRef } from "react";
import useInterval from "../utils/useInterval";
import Controls from "../Controls";
import Play from "../Play";
import Timer from "../Timer";
import soundfile from "../old_telephone.mp3"

function Pomodoro() {
  const [focus, setFocus] = useState(25)
  const [breakTime, setBreak] = useState(5)
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [countdown, setCountdown] = useState(1500)
  const [status, setStatus] = useState("Focusing")
  const [clockStop, setClockStop] = useState(true)
  const [disableControls, setDisableControls] = useState(false)
  const [stopDisable, setStopDisable] = useState(true)
  const myAudio = useRef();
  const alarm = new Audio(soundfile);
  
  useInterval(
    () => {
      setCountdown(countdown - 1)
      if (countdown <= 0) {
        alarm.play()
        if (status === 'Focusing') {
          setStatus('On Break')
          setCountdown(breakTime * 60)
        } else if (status === 'On Break') {
          setStatus('Focusing')
          setCountdown(focus * 60)
        }
      }
    },
    isTimerRunning ? 1000 : null
  )

  const handleReset = () => {
    setFocus(25)
    setBreak(5)
    setCountdown(1500)
    setStatus('Focusing')
    setIsTimerRunning(false)
    setClockStop(true)
    setDisableControls(false)
  }

  const playPause = () => {
    setIsTimerRunning((prevState) => !prevState);
    setClockStop(false)
    setDisableControls(true)
    setStopDisable(false)
  }
  
  return (
    <div className="pomodoro">
    <Controls 
    focus={focus}
    setFocus={setFocus}
    breakTime={breakTime}
    setBreak={setBreak}
    setCountdown={setCountdown}
    disableControls={disableControls}
      />
    <Play 
      isTimerRunning={isTimerRunning}
      playPause={playPause}
      handleReset={handleReset}
      stopDisable={stopDisable}
      />  
    <Timer
    status={status}
    countdown={countdown} 
    setCountdown={setCountdown} 
    focus={focus} 
    breakTime={breakTime} 
    isTimerRunning={isTimerRunning}
    clockStop={clockStop} 
      />
      <audio id='alarm' ref={myAudio} src={alarm} type='audio/mp3'></audio> 
    </div>
  );
}

export default Pomodoro;


