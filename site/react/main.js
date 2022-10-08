
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form accept-charset="utf-8" action="/" method="post">
                <label for="fname">Введите текст</label><br/>
                <input type="text" id="fname" name="name"/><br/>
                <input type="text" id="fname" name="age" /><br/>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}
const element = document.getElementById("main");

ReactDOM.render(<Main />, element);