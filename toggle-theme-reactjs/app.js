const Icon = (props) => {
    return (
        <div>
            <i className={`fa-solid ${props.on ? "fa-moon" : "fa-sun"}`}></i>
        </div>
    )
}

const Toggle = () => {
    const [on, setOn] = React.useState(false);
    const handleToggle = () => {
        setOn((on) => !on)
    }
    return (
        <div className={`bg ${on ? "active" : ""}`}>
            <Icon on={on}></Icon>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle} >
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <Toggle></Toggle>
    );
}
ReactDOM.render(<App></App>, document.querySelector("#root"));