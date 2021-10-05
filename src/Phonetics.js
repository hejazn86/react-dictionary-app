import React from 'react';

export default function Phonetics(props){
    return (
        <div className='Phonetics'>
        <div className='audio'>
        <a href={props.phonetics.audio} target='_blank' rel="noreferrer"><i class="fas fa-volume-up"></i></a>
        </div>
        <span>/{props.phonetics.text}/</span>  
    </div>
    );
}