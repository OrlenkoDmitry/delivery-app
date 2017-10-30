import React from 'react';

const MailList = () => {
    return (
        <div className="mail-list">
            <h4>Список входящих посылок</h4>
            <table className="table-scroll">
                <thead>
                <tr>
                    <th>Тип содержимого</th>
                    <th>ФИО получателя</th>
                    <th>Адрес получателя</th>
                    <th>Стоимость доставки</th>
                    <th>Примечания по посылке от получателя (необязательное поле)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Телевизор</td>
                    <td>Сидоров М.К.</td>
                    <td>г. Запорожье</td>
                    <td>100 грн.</td>
                    <th></th>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default MailList;