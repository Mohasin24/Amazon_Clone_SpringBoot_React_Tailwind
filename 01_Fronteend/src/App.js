import Home from "./components/home/Home";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section className="bg-gray-300 min-h-screen w-full">
      <Home /> 
      <Main/>
      </section>
      
    </div>
    );
}

export default App;
