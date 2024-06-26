import Button from './button';
import Header from './header';
import List from './list';
import Person from './person';
function App() {
  
    
   const handleClick = () => {
    alert('Button clicked!');
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Header title="Welcome to My App" />
      <h1>Person Information</h1>
      <Person name="John Doe" age={30} />
      <Person name="Jane Smith" age={25} />
      <Button text="Click Me" onClick={handleClick} />
      <List items={items} />

  </div>
  );

};
export default App;
