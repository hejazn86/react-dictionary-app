import React from 'react';


export default function Meaning (props){
    return (
        <div className='Meaning'>
            <div>
            <h4 className="font-weight-bold">{props.meaning.partOfSpeech}</h4>
            <p>{props.meaning.definitions[0].definition}</p>
            <p><strong>Example :</strong> {"  "}{props.meaning.definitions[0].example}</p>
            </div>
            <div>
            
            </div>       
        </div>
    );
}