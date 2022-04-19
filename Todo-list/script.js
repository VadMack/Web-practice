const rootElement = document.getElementById('root');

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            list: [],
            keyCounter: 0
        };
    }


    onChangeValue = event => {
        this.setState({value: event.target.value});
    };


    onAddItem = () => {
        this.setState(state => {
            if (state.value !== '') {
                const list = state.list.concat(state.value);

                return {
                    list,
                    value: '',
                };
            }
        });
    };

    onRemoveItem = i => {
        this.setState(state => {
            const list = state.list.filter((item, j) => i !== j);

            return {
                list,
            };
        });
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.onAddItem()
        }
    };

    render() {
        return (
            <div className="shopping-list">
                <h1>To-do list</h1>
                <div id="inputHolder">
                    <input id="input" placeholder="Your task" type="text" value={this.state.value}
                           onChange={this.onChangeValue}
                           onKeyDown={this.handleKeyDown}/>
                    <button id="submitBtn" onClick={this.onAddItem}>Submit</button>
                </div>
                <div id="itemHolder">
                    {this.state.list.map((item, index) => (
                        <div key={this.state.keyCounter++} className="item">
                            {item}
                            <button
                                className="itemBtn"
                                onClick={() => this.onRemoveItem(index)}
                            >
                                Delete
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


function App() {
    return (
        <div id="container">
            <TodoList/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    rootElement
);