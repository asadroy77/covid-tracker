import React from 'react';
import axios from "axios";
import "./FetchData.css" ;
import Select from 'react-select';

import {useState, useEffect } from 'react';

export const FetchData = (props) => { 

    const options = [
      { value: '', label: 'Global' },
        { value: 'US', label: 'United states' },
        { value: 'Pk', label: 'Pakistan' },
        { value: 'Ind', label: 'India' }
      ]

    //   let selectedOption ="";

      const handleChange = (selectedOption) => {
        console.log(selectedOption.value)
        props.setCountry(selectedOption.value)


      }

    useEffect(()=>{
        let url = "https://covid19.mathdro.id/api"

        if(props.country) {
            let mainurl = url + '/countries/' + props.country
            axios.get(mainurl)
            .then((response)=> {
                console.log(response.data)
                props.setReport(response.data)
            })

        }
        else{

            axios.get(url)
            .then((response)=> {
                console.log(response.data)
                props.setReport(response.data)
            })

        }

      

    },[props.country])
    
    const colourStyles = {
      control: (styles,state) => ({ ...styles, backgroundColor: 'rgba(0,0,0,0)', border: 0,
      // This line disable the blue border
      boxShadow: 'none'
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "rgba(189,197,209,.3)" : "white",
    }),
    };




  return ( <>

    <div>
        <img src='covid.png'></img>
    </div>   
    <div className='parent'>
    <div className='child'><p>confirmed</p>
    <h3>{props.report.confirmed.value}</h3>
    
    <p>{props.report.lastUpdate}</p>
    </div>
    <div className='child b'>
    <p>recovered</p>
    <h3>{props.report.recovered.value}</h3>
  
    <p>{props.report.lastUpdate}</p>
    </div>
    <div className='child c'>
    <p>deaths</p>
    <h3>{props.report.deaths.value}</h3>
    <p>{props.report.lastUpdate}</p>
    </div>
    </div>

    <div>
        
    </div>


    <div className='select'>
    <Select  styles={colourStyles}
          onChange={handleChange} 
    options={options} />
    </div>
    </>)
}
