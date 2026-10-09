
import './App.css'
import { getUserList } from './data/users';
import { UserList } from './components/UserList';

function App() {

  const getUsersList = getUserList();

  return(
    <div>
      <UserList users={getUsersList}/>
    </div>
  );
}

export default App
