import logo from './logo.svg';
import './sass/App.scss';
import sun from './images/icon-sun.svg';
import check from './images/icon-check.svg';
import cross from './images/icon-cross.svg'

function App() {
  return (
    <>
      <header className="headerContainer">
        <h1>TODO</h1>
        <img src={sun} />
      </header>

        <label className="searchContainer">
          <input value="" type="submit" className="searchContainer__button"/>
          <input
          placeholder="Create a new TODO" 
          className="searchContainer__input" />
          
        </label>


      <section>
        <div>
          <img src={check}/>
          <p>Primer TODO</p>
          <img src={cross} />
        </div>
      </section>


     {/*  <section>
        <p>All</p>
        <p>Active</p>
        <p>Complete</p>
      </section>

      <footer>
        Drag and drop to reorder list
      </footer> */}
    </>

   
  );
}

export default App;
