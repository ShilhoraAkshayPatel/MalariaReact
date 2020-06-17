import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

const myurl = "https://malareaapi333.herokuapp.com/api/predict"
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedFile: null,
      result: "",
      loading: false,
      message: {
        image: " ",
      }
    }

    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0])
    })

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {

      const dataurl = reader.result
      const base64Image = dataurl.replace("data:image/png;base64,", "");

      this.setState({
        message: { image: base64Image }
      })
      console.log(this.state)
    };
  }

  async uploadHandler() {
    this.setState({
      loading: true
    })
    const data = JSON.stringify(this.state.message)
    axios({
      method: 'post',
      url: myurl,
      data: data,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        //handle success
        const result = response.data
        return result

      }).then(result => {
        this.setState({
          result: result,
          loading: false
        })
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }


  render() {
    console.log(this.state)
    return (
      <>
        <div className="App-header App">
          <h1>Upload Cell Image for Prediction </h1>
          <div className="classdiv">

            {(this.state.selectedFile) ? <img src={this.state.selectedFile} alt="uploaded data" /> : null}

            <input className="custom-file-input" type="file" onChange={this.fileChangedHandler} />
            <button disabled={!this.state.selectedFile} className="btn" onClick={this.uploadHandler}>Predict!</button>
            {(this.state.loading) ? <div className="loader"></div> : <h1 className="result">Result: {this.state.result}</h1>}
          </div>
        </div>
      </>
    );
  }

}


