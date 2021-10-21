import React, { useState} from 'react';
import './SearchWord.css';
import axios from 'axios';
import WordDefinitions from './WordDefinitions';
import Photos from './Photos';

export default function SearchWord(){
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);
    const [loaded, SetLoaded] = useState(false);
    const [photo, setPhoto] = useState(null);

    
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
        setResult(response.data[0]);
    }

    function handlePexelResponse(response){
        // console.log(response.data.photos);
        setPhoto(response.data.photos)
    }
    function search(){

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResult);

    let pexelApiKey = '563492ad6f9170000100000193af54c106874dee83c9af7c31f9f7a1';
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    let headers = {Authorization : `Bearer ${pexelApiKey}`};
    axios.get(pexelApiUrl, {headers : headers}).then(handlePexelResponse);
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
            <Photos photos= {photo}/>
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