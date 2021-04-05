
import Choose from "./Choose";
import AboutCompany from "../container/AboutCompany";
import Company from "../component/Company";
import Partners from "../component/Partners";
import Footer from "../component/Footer";
import Client from "../component/Client";
import ChooseCards from "./ChooseCards";



import React, {useEffect, useState} from 'react';

import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import OurTeam from "./OurTeam";

const override = css`
  display: block;
   // margin : 200px auto;
  border-color: #1F7BBE;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -50px
 
`;

function MainChoose() {

    const [loading, setLoading]= useState(false);


    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    }, [])
    return (



        <div >
            {
            loading ?
               ( <div    >

                   <img src="./img/backFon.svg" className="loaderImg" alt=""/>

                    <HashLoader
                        css={override}
                        size={100}
                        color={"#1F7BBE"}
                        loading={loading}
                    />
                </div>)
                :
               <>
                   <Choose />
                   <Company />
                   <Partners />
                   <AboutCompany />
                   <OurTeam/>
                   <ChooseCards />
                   <Client />
                   <Footer />
               </>

            }
        </div>

    );
}

export default MainChoose;