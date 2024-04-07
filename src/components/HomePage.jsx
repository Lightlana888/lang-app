import React, { useState } from 'react';
//import AuthApp from './input';
//import RegistrationForm from './input';
import WordTable from './WordTable';
import WordCard from './WordCard';

function HomePage() {

    //const [isRegistered, setIsRegistered] = useState(true);

    /*const handleRegistration = () => {
        setIsRegistered(true);

    };*/

    return (
        /*<div>
    
    {isRegistered ? <WordTable /> : <AuthApp onRegistration={handleRegistration} />}
            </div>
        );
    }*/
        <>
            <div><WordTable /></div>
            <div><WordCard /></div>
        </>);
}
export default HomePage;
