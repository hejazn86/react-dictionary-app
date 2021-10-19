import React, { useState} from 'react';
import './SearchWord.css';
import axios from 'axios';
import WordDefinitions from './WordDefinitions';

export default function SearchWord(){
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);
    const [loaded, SetLoaded] = useState(false);

    
    function handleSubmit(event){
        event.preventDefault();
        SetLoaded(true);
        search();

    }

    function changeWord(event){
        event.preventDefault();
        setWord(event.target.value);
    }

    function handleResult(response){
        console.log(response.data[0])
        setResult(response.data[0]);
    }
    function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResult);
    }

    if (loaded){
    return (
       
        <div className='SearchWord'>
             <section>
             <div className='fs-4 fw-bold mb-3 mx-3'>What is in your mind?</div>
            <form onSubmit={handleSubmit}>
                <input type="search" className="form-control" placeholder="Search a word..." onChange={changeWord}/> 
            </form>
            </section>
            
            <WordDefinitions results={result}/>
        </div> 
        
        
    );
    } else{
        return(
        
            <div className='SearchWord'>
                <section>
                    <div className='fs-4 fw-bold mb-3 mx-3'>What is in your mind?</div>
                <form onSubmit={handleSubmit}>
                    <input type="search" className="form-control" placeholder="Search a word..." onChange={changeWord}/> 
                </form>
                </section>
            </div>
        
        );  
    }

}