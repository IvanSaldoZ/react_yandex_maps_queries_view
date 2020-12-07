//Импортируем сам React
import React, {PureComponent} from 'react'
//Подгружаем компонент YandexMapsQueriesList
import YandexMapsQueriesList from "./YandexMapsQueriesList";
//Подключаем Bootrap
import 'bootstrap/dist/css/bootstrap.css'


//Основной класс программы
class App extends PureComponent {
    //Конструктор для инициализации свойств
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading",
            reverted: false,
            queries: [],
        };
    }

    //Объявляем переменную состояния компонента
    // state = {
    //     reverted: false
    //}

    //Метод для отображения компонента
    //articles.slice() - делает копию массива статей, чтобы НЕ передавать ее по ссылке
    //Это важно, когда используется PureComponent, который включает в себя автоматически ShouldComponentUpdated,
    //и если передать по ссылке, то reverse() по факту НЕ изменяет массив, а значит изменений отображаться НЕ будет
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Список запросов адресов
                        <button className="btn btn-primary" onClick={this.revert}>Обратный порядок</button>
                    </h1>
                </div>
                <YandexMapsQueriesList queries={this.state.data}/>
            </div>
        )
    }

    //Подгружаем данные для отображения
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

    //Наш метод для изменения состояния - обратный порядок сортировки
    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }



}


export default App
