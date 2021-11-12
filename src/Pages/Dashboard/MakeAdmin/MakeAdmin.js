import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://radiant-mesa-88609.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Admin Added Successfully!')
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h4 className="text-center mb-4">Make a Admin</h4>
            <div className="text-center">
                <form onSubmit={handleMakeAdmin}>
                    <label htmlFor="" className="mb-3">User Email</label> <br />
                    <input className="mb-3" onBlur={handleOnBlur} type="email" /> <br />
                    <input className="btn btn-danger rounded-pill" type="submit" value="Make Admin" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;