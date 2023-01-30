import App3 from "./app3";

function App2(apple) {
    return (
        <div>
            <h2>App2</h2>
            <p>{apple.message}</p>
            <App3 m1="from App2.js" />
        </div>
    )
}

export default App2;