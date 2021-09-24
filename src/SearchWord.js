import React from 'react';
import './SearchWord.css';

export default function SearchWord(){
    
    function handleSubmit(event){
        event.preventDefault();
        alert(event.target.value);
    }
    return (
        <div className='SearchWord'>
            <form onSubmit={handleSubmit}>
                <input type="search" className="form-input w-50 me-2" placeholder="Search a word..."/> 
                <input  type='Submit' value='search' className="btn btn-warning"/>
            </form>
        </div> 
        
    );

}