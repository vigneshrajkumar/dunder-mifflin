import React, { useState, useEffect }  from 'react';
import Navbar from './Navbar';

export default function HomePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/auth/user")
            .then(res => res.json())
            .then(res => {
                setUser(res)
            })
            .catch(err => console.log(err.message))
    }, [])

    return(
        <div className="view-area">
           <Navbar logIn={false}/>
        </div>
    )
}