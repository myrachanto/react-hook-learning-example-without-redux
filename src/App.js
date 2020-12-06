const { default: Bookform } = require("./components/Bookform");
const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");
const { default: BookContextProvider } = require("./contexts/BookContext");

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <Bookform/>
      </BookContextProvider>
    </div>
  );
}

export default App;
