import React from 'react';
import {auth} from './firebase'

const CurrentUser = ({user}) => {
    return (
        <div className="grid-x grid-padding-x">
            <div className="medium-12 cell">
                <h4>Пользователь</h4>
                <p>{user.email}</p>
            </div>
            <div className="medium-12 cell">
                <button className="alert button" onClick={() => auth.signOut()}>
                    Выйти
                </button>
            </div>
        </div>
    )
};

export default CurrentUser;


