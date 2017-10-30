import React from 'react';
import {auth} from './firebase';

const Authentication = () => {
    return (
        <div className="authentication">
            <form action="#">
                <div className="grid-x grid-padding-x">
                    <div className="medium-12 cell">
                        <h4>Аутенфикация</h4>
                    </div>
                    <div className="medium-6 cell">
                        <label>Введите адрес электронной почти
                            <input type="email" id="user-email"/>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>Пароль
                            <input type="password" id="user-password"/>
                        </label>
                    </div>
                    <div className="medium-2 cell">
                        <button className="success button"
                                onClick={() => {
                                    const email = document.getElementById('user-email').value;
                                    const pass = document.getElementById('user-password').value;
                                    auth.createUserWithEmailAndPassword(email, pass)}}>
                            Регистрация
                        </button>
                    </div>
                    <div className="medium-2 cell">
                        <button className="success button"
                                onClick={() => {
                                    const email = document.getElementById('user-email').value;
                                    const pass = document.getElementById('user-password').value;
                                    auth.signInWithEmailAndPassword(email, pass)}}>
                            Войти
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Authentication;

