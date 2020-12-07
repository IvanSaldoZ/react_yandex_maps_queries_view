//Компонент для отображения списока запросов к API преобразования адрдеса в ссылку на Яндекс.Карты
//Импортируем сам React
import React, {PureComponent} from 'react'
//Стили компонента
import './style.css'
import Query from "../YandexMapsQueryShow";
//Отображение пункта - Запрос


//Компонент для отображения списка запросов
export default class YandexAddressQueriesList extends PureComponent {

    //Рендерим компонент
    render() {
        //Конвеншн: в props экземпляра класса хранятся свойства, переданные классу компонента
        //Юзер: {query.user}: {query.query_str} - {query.link_to_ya_map}
        const queryElements = this.props.queries.map((query) =>
            <li key={query.id} className="article-list__li">
               <Query query={query}/>
            </li>
        )
        //Рендерим компонент
        return (
            <ul>
                {queryElements}
            </ul>
        )
    }

}

