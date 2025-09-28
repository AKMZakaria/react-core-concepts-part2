import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'
import Players from './Players'
import ToDos from './ToDos'

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return res.json();
}


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
// .then(data => console.log(data))   // no need

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();

}

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {

  const toDoPromise = fetchTodos();

  const postPromise = fetchPosts();

  const friendsPromise = fetchFriends();

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

      <Suspense fallback={<p>todos are coming...</p>}>
        <ToDos toDoPromise={toDoPromise}></ToDos>
      </Suspense>

      <Players></Players>

      <Suspense fallback={<p>Posts are coming...</p>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

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
