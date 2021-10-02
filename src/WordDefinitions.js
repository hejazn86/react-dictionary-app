import React from 'react';
import Meaning from './Meaning';
// import Pronounciation from './Pronounciation';
export default function WordDefinitions(props){
    if(props.results){  
        return (
        <div className='WordDefinitions'>
            <div className='word'>
                <h2 className="mt-4">{props.results.word}</h2>
                <div>
                    {/* <Pronounciation audioData={props.results.phonetics[0].audio}/> */}
                    <span>/{props.results.phonetics[0].text}/</span>  
                </div>
            </div>
            <div className='definitions mt-4'>
                {props.results.meanings.map((meaning, index)=>{
                    return(
                        <div key={index}>
                            <Meaning  meaning={meaning}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );} else{
        return null;
    }
}
