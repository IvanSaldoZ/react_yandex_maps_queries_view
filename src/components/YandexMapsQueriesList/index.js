//Компонент для отображения списока запросов к API преобразования адрдеса в ссылку на Яндекс.Карты
//Импортируем сам React
import React, {PureComponent} from 'react'
//Стили компонента
import './style.css'


export default class YandexAddressQueriesList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/v1/yandex_maps/query/get_all/"
        )
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }


    //Рендерим компонент
    render() {
        //Конвеншн: в props экземпляра класса хранятся свойства, переданные классу компонента
        //Рендерим компонент
        return (
                <ul>
                    {this.state.data.map(contact => {
                        return (
                            <li key={contact.id}>
                                Юзер: {contact.user}: {contact.query_str} - {contact.link_to_ya_map}
                            </li>
                        );
                    })}
                </ul>
        )
    }

}

