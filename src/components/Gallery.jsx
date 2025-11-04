import {useState, useEffect} from 'react';
import axios from 'axios';
import './Gallery.css';
import Page from './Page';
const Gallery = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {

    };
    fetchUsers();
  }, []);
  
  return (
    <div className="gallery">
      {users.map((user) => (
        <Page 
          key={user.id}
          avatar={user.avatar}
          name={user.name}
        />
      ))}
    </div>
  );
};

export default Gallery;