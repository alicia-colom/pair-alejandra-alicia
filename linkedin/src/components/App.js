import '../stylesheets/App.scss';
import Header from './Header';
import UserList from './UserList';
import data from '../data/data.json';
import { useState } from 'react';

const App = () => {
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();

  const [gender, setGender] = useState();

  const handleGender = (y) => {
    return setGender(y);
  };

  return (
    <div className="App">
      <Header />
      <UserList datas={data} handleGender1={handleGender} />
      <aside className="topBanner"></aside>
    </div>
  );
};

export default App;
