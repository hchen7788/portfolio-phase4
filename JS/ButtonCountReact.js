class ButtonCountReact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    increment(){
        this.setState((prev) => ({
            count: prev.count + 1
        }));
    }

    render() {
        return(
        <>
            <h2>React Web Component Counter</h2>
            <button onClick={() => this.increment()}>Times Clicked: {this.state.count}</button>
        </>
    )}
}

ReactDOM.render(<ButtonCountReact />, document.getElementById('root'));
