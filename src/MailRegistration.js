import React, {Component} from 'react';
import {database} from './firebase';

class MailRegistration extends Component {
    constructor() {
        super();
        this.state = {
            type: '',
            addresseeName: '',
            addresseeAddress: '',
            price: '',
            comments: ''
        };

        this.mailsRef = database.ref('/mails');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)  {
        event.preventDefault();
        this.mailsRef.push(
            {
                type: this.state.type,
                addresseeName: this.state.addresseeName,
                addresseeAddress: this.state.addresseeAddress,
                price: this.state.price,
                comments: this.state.comments,
            }
        )
}

    render () {
        const {type, addresseeName, addresseeAddress, price, comments} = this.state;

        return (
            <div className="mail-registration">
                <form>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-12 cell">
                            <h4>Регистрация посылок</h4>
                        </div>
                        <div className="medium-6 cell">
                            <label>Тип содержимого
                                <input
                                    type="text"
                                    value={type}
                                    onChange={(event) => this.setState({ type: event.target.value })}
                                />
                            </label>
                        </div>
                        <div className="medium-6 cell">
                            <label>ФИО получателя
                                <input
                                    type="text"
                                    value={addresseeName}
                                    onChange={(event) => this.setState({ addresseeName: event.target.value })}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-6 cell">
                            <label>Адрес получателя
                                <input
                                    type="text"
                                    value={addresseeAddress}
                                    onChange={(event) => this.setState({ addresseeAddress: event.target.value })}
                                />
                            </label>
                        </div>
                        <div className="medium-6 cell">
                            <label>Стоимость доставки, грн.
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(event) => this.setState({ price: event.target.value })}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-12 cell">
                            <label>
                                Примечания по посылке от получателя (необязательное поле)
                                <textarea
                                    placeholder="None"
                                    rows="5" value={comments}
                                    onChange={(event) => this.setState({ comments: event.target.value })}
                                />
                            </label>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="button"
                        onClick={this.handleSubmit}
                        disabled={!type}>
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
};

export default MailRegistration;