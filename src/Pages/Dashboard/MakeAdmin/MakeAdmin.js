import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make a Admin Page</h1>
            <div>
                <form onSubmit={handleMakeAdmin}>
                    <input onBlur={handleOnBlur} type="email" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;