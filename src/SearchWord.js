import React, { useState} from 'react';
import './SearchWord.css';
import axios from 'axios';
import WordDefinitions from './WordDefinitions';

export default function SearchWord(){
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);

    
    function handleSubmit(event){
        event.preventDefault();

    }

    function changeWord(event){
        event.preventDefault();
        setWord(event.target.value);
    }

    function handleResult(response){
        setResult(response.data[0]);
    }
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResult)
    return (
        <div className='SearchWord'>
            <form onSubmit={handleSubmit}>
                <input type="search" className="form-control w-50" placeholder="Search a word..." onChange={changeWord}/> 
            </form>
            
            <WordDefinitions results={result}/>
        </div> 
        
    );

}