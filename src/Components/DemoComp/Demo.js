import React, { Component } from 'react';
import axios from 'axios'
import { StyledCard, Headtitle, Button, Result, Title, Text, DivComp } from '../DemoComp/demostyle'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components'

const myurl = "https://malareaapi333.herokuapp.com/api/predict"
export default class Demo extends Component {

    constructor() {
        super();
        this.state = {
            selectedFile: null,
            result: "",

            filesize: "",
            filetype: "",
            loading: false,
            filename: null,
            message: {
                image: " ",
            }
        }

        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
    }

    fileChangedHandler = (event) => {
        this.setState({
            filesize: event.target.files[0].size,
            filetype: event.target.files[0].type,
            selectedFile: URL.createObjectURL(event.target.files[0]),
            filename: event.target.files[0].name,
        })
        console.log(event.target.files[0])
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
            <DivComp>
                <Container fluid>
                    <Row>

                        <Col lg={5}>
                            <Row>

                                <FadeTransform in
                                    delay={2000}
                                    duration={2000}
                                    transformProps={{
                                        exitTransform: 'scale(0.8) translateX(-50%)'
                                    }}
                                    fadeProps={{
                                        enterOpacity: 0.85,
                                    }}
                                >
                                    {(this.state.selectedFile) ?
                                        <StyledCard
                                            color={'#EEEFF0'}
                                            height={'330px'}
                                            width={'500px'}
                                        >
                                            <Container fluid>
                                                <Row>
                                                    <Col lg={6}>
                                                        <img style={{ width: '280px', height: '280px', padding: '25px', borderRadius: '18px' }} src={this.state.selectedFile} alt="uploaded data" />
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Title>Details</Title>
                                                        {(this.state.selectedFile) ?
                                                            <>
                                                                <Text>Size: {(this.state.filesize / 1024).toFixed(2)}KB</Text>
                                                                <Text>Type: {this.state.filetype}</Text>

                                                            </>

                                                            : "No details Found"
                                                        }

                                                    </Col>
                                                </Row>
                                            </Container>
                                        </StyledCard>
                                        : null}
                                </FadeTransform>
                            </Row>
                        </Col>

                        <Col lg={7}>
                            < StyledCard
                                color={'#EEEFF0'}
                                className="card text-center"
                            >
                                <Headtitle>Upload Cell Image for Prediction </Headtitle>

                                <div style={{ width: '450px', padding: '15px', marginLeft: '100px' }}>

                                    <Form.File
                                        id="custom-file-translate-scss"
                                        label={(this.state.filename) ? this.state.filename : "Upload a File..."}
                                        lang="en"
                                        custom
                                        onChange={this.fileChangedHandler}
                                    />

                                </div>

                                <Button disabled={!this.state.selectedFile} className="btn" onClick={this.uploadHandler}>Predict!</Button>
                                {(this.state.loading) ? <div className="loader"></div> : <Result> <span style={{ color: "#00000" }}>Result:</span> {this.state.result}</Result>}

                            </StyledCard>
                        </Col>
                    </Row>
                </Container >
            </DivComp>
        );
    }

}


