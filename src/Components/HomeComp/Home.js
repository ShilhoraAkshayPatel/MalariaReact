import React, { Component } from 'react';

import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { IconContext } from "react-icons";


export default class Home extends Component {

    render() {

        return (
            <>
                <div className="App-header App">
                    <div style={{padding:'40px'}}>
                        <h1 style={{ padding: '14px', fontSize: '46px', color:'#3498DB'}}>
                            Malaria Predictor</h1>
                    <p style={{ fontSize:'26px',fontFamily:'monospace' }}>
                        The application is designed to predict whether 
                    <br/> 
                    the input image is either parasitized or un-infected. </p>
                    <p style={{ fontSize: '26px', fontFamily: 'monospace' }}>
                        We've trained our network for the set of images
                 <br /> when you test these can give you an outcome in less than 3 seconds.</p>

                    <p style={{ fontSize: '26px', fontFamily: 'monospace' }}>
                        When higher-resolution images are given as input it consumes time.
                        <br />
                        As the input is encoded and sent to the server and it decodes the input pixels.
                        <br />
                        This process consumes time. 
                        <br />
                        Since we had trained our network with good resolution(i.e. 128x128x3),
                        <br />
                        compared to existing literature, our algorithm or networks returns in less than 3 seconds.
                    </p>

                    <p style={{ fontSize: '26px', fontFamily: 'monospace' }}>
                        Note: If you want to test whether the input is parasitized or not,
                        <br />download a complete set from the
                        <a href={"https://lhncbc.nlm.nih.gov/publication/pub9932"}> NIH original website </a>
                        or the

                        <a href={"https://www.kaggle.com/iarunava/cell-images-for-detecting-malaria"}> Kaggle </a>
                        <br />
                        If in case of data compatibility issues download set of images from the website and try on them.
                    </p>

                        <p style={{ fontSize: '26px', fontFamily: 'monospace' }}>
                            In Case of any Dataset Compatibility Issue Dawnload 
                        <a href={"https://mega.nz/folder/YdwxBRyQ#HyUAvfFYx2_8-VRnFAbNUA"}> Dataset From Here </a>
                        </p>

                    <div style={{ fontSize: '26px', fontFamily: 'monospace', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{padding:'12px'}}>
                            <IconContext.Provider value={{ color: "white", size: '4rem' }}>

                                <AiFillGithub />

                            </IconContext.Provider>
                            <br />
                            <a href={"https://github.com/ShilhoraAkshayPatel/malariapi"}>
                                RestApi
                            </a>
                        </div>

                        <div style={{ padding: '12px' }}>
                            <IconContext.Provider value={{ color: "white", size: '4rem' }}>

                                <AiFillGithub />

                            </IconContext.Provider>
                            <br />

                            <a href={"https://github.com/ShilhoraAkshayPatel/MalariaReact"}>
                                WebApp
                       
                            </a>
                        </div>

                        <div style={{ padding: '12px' }}>
                            <IconContext.Provider value={{ color: "white", size: '4rem' }}>

                                <AiFillMail />

                            </IconContext.Provider>
                            <br />
                            <a href={"mailto:shilhora.akshay333@gmail.com"}>
                                Email
                              </a>


                        </div>


                    </div>

                    </div>
                </div>
            </>
        );
    }

}


