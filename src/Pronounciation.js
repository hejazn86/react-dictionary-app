import React, { useState } from 'react';

export default function Pronounciation(props){
    const [audioFile, setAudioFile] = useState(null);

    function playAudio(){
        setAudioFile(new Audio(props.audioData))
        audioFile.play();
    }
    
    return (
        <div className='Pronounciation'>
            <button onClick={playAudio}>Listen</button>
            <audio>
                <source src={audioFile}>Listen</source>
            </audio>
        </div>
    );
}
