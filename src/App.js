
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <aside>
        <ul>
          <li><a href='#'>Sidebar Item 1</a></li>
          <li><a href='#'>Sidebar Item 2</a></li>
          <li><a href='#'>Sidebar Item 3</a></li>
        </ul>
      </aside>
      <div className='dashboard'>
        <div className='widget'>
          <h2>Widget 1</h2>
          <p>Content for Widget 1</p>
        </div>
        <div className='widget'>
          <h2>Widget 2</h2>
          <p>Content for Widget 2</p>
        </div>
        <div className='widget'>
          <h2>Widget 3</h2>
          <p>Content for Widget 3</p>
        </div>
        <footer>
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
