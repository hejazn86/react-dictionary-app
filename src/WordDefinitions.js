import React from 'react';
import Meaning from './Meaning';
import Phonetics from './Phonetics';
import Synonyms from './Synonyms';

export default function WordDefinitions(props){
    if(props.results){  
        return (
        <div className='WordDefinitions'>
            <section>
            <div className='word ps-3'>
                <h2 className="mt-2 fs-2 fw-bold">{props.results.word}</h2>
                 <Phonetics phonetics={props.results.phonetics[0]}/>
            </div>
            </section>
            <div className='definitions mt-4'>
                {props.results.meanings.map((meaning, index)=>{
                    return(
                        <section key={index}>
                            <Meaning  meaning={meaning}/>
                            <Synonyms  synonyms={meaning.definitions[0].synonyms}/>
                        </section>
                    )
                })}
                
            </div>
        </div>
    );} else{
        return null;
    }
}
