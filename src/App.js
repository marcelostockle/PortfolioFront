import ProjectBox from './components/ProjectBox';
const data = require('./projects.json')

function App() {
  return (
    <div className="App">
      {
        data.map((project) => {
          return <ProjectBox {...project}/>
        })
      }
    </div>
  );
}

export default App;
