import React from 'react';
import logo from './logo.svg';
import './App.css';


class AppStreamCam extends React.Component {
  constructor(props) {
    super(props);
    this.streamCamVideo = this.streamCamVideo.bind(this)
  }
  streamCamVideo() {
    //var constraints = { audio: true, video: { width: 640, height: 480 } };

    // Get a list of connected devices, sort them to find the videoinputs only, then get the user media for each one
    navigator.mediaDevices.enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {

          if (device.label == "videoinput"){
            navigator.mediaDevices.getUserMedia({
              video: {
                deviceId: { exact: device.deviceId }
              }
            });
          }
        });
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });// always check for errors at the end.
  } 
  render() {
        return(
      <div className = "App" >
            <header className="App-header">
              <div id="container">
                <video autoPlay={true} id="video" controls></video>
              </div>
              <br />
              <button onClick={this.streamCamVideo}>Start streaming</button>
            </header>
      </div>
    );
  }
}

export default AppStreamCam;

