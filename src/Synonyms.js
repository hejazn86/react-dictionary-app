import React from 'react';

export default function Synonyms(props){
    if (props.synonyms){
    return (
        <div className='Synonyms'>
            <div className='fw-bold'>Synonyms :</div>
            {props.synonyms.map((synonym, index) => {
                return(
                <span  className='mx-1' key={index}>
                      <span>{synonym} </span>  
                </span>);
            })} 
            
        </div>);
    } else{
        return null;
    }

}