//Импортируем сам React
import React, {PureComponent} from 'react'

class Query extends PureComponent {

    //Метод для рендеринга компонента на странице (построение виртуального DOM)
    //Логику здесь писать не надо
    render() {
        //Читаем весь массив входных переменных, включая функцию
        const {query} = this.props
        //Ширина
        const style = {width: '50%'}
        //Ссылка
        const link = query.link_to_ya_map

        //Рендерим компонент
        //Юзер: {query.user}: {query.query_str} - {query.link_to_ya_map}
        return (
            <div className="card mx-auto mb-2" style={style}>
                <div className="card-header">
                    <h2>
                        {query.query_str}
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">юзер: {query.user}</h6>
                    <section className="card-text"><a href={link} target="_blank" rel="noreferrer">{link}</a></section>
                </div>
            </div>
        )
    }

}



export default Query
