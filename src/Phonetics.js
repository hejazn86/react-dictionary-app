import React from 'react';

export default function Phonetics(props){
    return (
        <div className='Phonetics'>
        <span className='audio me-3'>
        <a href={props.phonetics.audio} target='_blank' rel="noreferrer"><i className="fas fa-volume-up"></i></a>
        </span>
        <span className='opacity-75 fw-bold fs-6'>/{props.phonetics.text}/</span>  
    </div>
    );
}