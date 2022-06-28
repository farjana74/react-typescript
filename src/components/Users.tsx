import React from 'react';
type UserProps = {
    userData: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[];
}

const Users = ({ userData }: UserProps) => {

    return (
        <div>
            {
                userData.map((user) => {
                    const { id, name, age, email } = user;
                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <p>{age}</p>
                            <p>{email}</p>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;