import React, { useState } from 'react';

import RegistrationForm from './input';
import WordList from './WordList';

function HomePage() {

    const [isRegistered, setIsRegistered] = useState(true);

    const handleRegistration = () => {
        setIsRegistered(true);

    };

    return (
        <div>

            {isRegistered ? <WordList /> : <RegistrationForm onRegistration={handleRegistration} />}
        </div>
    );
}

export default HomePage;
