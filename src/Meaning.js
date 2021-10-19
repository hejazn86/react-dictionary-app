import React from 'react';


export default function Meaning (props){
    return (
        <div className='Meaning'>
            <div>
            <h4 className="fs-1 fw-bolder">{props.meaning.partOfSpeech}</h4>
            <p>{props.meaning.definitions[0].definition}</p>
            <p className='example opacity-75'><strong className='opacity-100'>Example :</strong> {"  "}{props.meaning.definitions[0].example}</p>
            </div>
            <div>
            
            </div>       
        </div>
    );
}