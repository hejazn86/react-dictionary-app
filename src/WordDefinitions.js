import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import Synonyms from './Synonyms';

export default function WordDefinitions(props){
    if(props.results){  
        return (
        <div className='WordDefinitions'>
            <div className='word'>
                <h2 className="mt-4">{props.results.word}</h2>
                 <Phonetics phonetics={props.results.phonetics[0]}/>
            </div>
            <div className='definitions mt-4'>
                {props.results.meanings.map((meaning, index)=>{
                    return(
                        <div key={index}>
                            <Meaning  meaning={meaning}/>
                            <Synonyms  synonyms={meaning.definitions[0].synonyms}/>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );} else{
        return null;
    }
}
