import React, { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import "../styles/mic.css";
function Mic() {
  const [audioData, setAudioData] = useState(null);
  const recorderControls = useAudioRecorder();

  const addAudioElement = (blob) => {
    setAudioData(blob);
  };

  return (
    <div>
      <div className="ml-32">
        <AudioRecorder
          className="mt-11"
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
        />
      </div>
      <button onClick={recorderControls.startRecording}>Start recording</button>
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <div className="ml-20">
        <audio
          className="mt-10"
          src={audioData ? URL.createObjectURL(audioData) : ""}
          controls
        ></audio>
      </div>
    </div>
  );
}

export default Mic;
