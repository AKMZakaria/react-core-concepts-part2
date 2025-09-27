import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {

  function handleClick() {
    alert('I am clicked')
  }

  const handleClick3 = () => {
    alert('Clicked 3')
  }

  const handleAdds = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <Batsman></Batsman>
      <Counter></Counter>
      <br />

      {/* <button onclick = 'handleClick()'>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2() {
        alert('Clicked 2')
      }}>Click Me</button>

      <button onClick={handleClick3}>Click Me</button>

      <button onClick={() => alert('Click 4')}>Click Me</button>

      <button onClick={() => handleAdds(10)}>Click Add 5</button>


    </>
  )
}

export default App
