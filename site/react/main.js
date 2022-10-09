
class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <form accept-charset="utf-8" action="/" method="post">
                <fieldset>
                    <legend>Personalia:</legend>
                    <label for="fname">Введите текст</label><br/>
                    <div>
                    <input type="text" id="fname" name="name"/>
                    <span>&#9;</span>
                    <input type="text" id="fname" name="age" /><br/>
                    </div>
                    <div>
                        <input type="radio" id="create" name="reacts" value="create" />
                        <label for="create">create</label>

                        <input type="radio" id="update" name="reacts" value="update" />
                        <label for="update">update</label>

                        <input type="radio" id="delete" name="reacts" value="delete" />
                        <label for="delete">delete</label>
                    </div>
                    <div>
                        <input type="submit" value="Отправить"/>
                    </div>
                    
                </fieldset>
            </form>
        )
    }
}
const element = document.getElementById("mains");

ReactDOM.render(<Main />, element);