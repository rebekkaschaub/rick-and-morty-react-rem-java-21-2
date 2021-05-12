import './App.css';
import Header from "./components/Header";
import Character from "./components/Character";

function App() {
    const characterData = [{
        id: "1",
        name: "Jochen",
        description:'some description'
    },{
        id: "2",
        name: "Jochen2",
        description:'some description2'
    }]


    return (
        <div className="App">
            <Header/>
            <Character character={characterData[0]}/>
            <Character character={characterData[1]}/>
        </div>
    );
}

export default App;
