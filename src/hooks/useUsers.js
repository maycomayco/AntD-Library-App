import { useState } from 'react';
import getUsers from '../services/getUsers';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = () => {
    setLoading(true);
    getUsers().then((resp) => {
      setUsers(resp);
      setLoading(false);
    });
  };

  return [loading, users, loadUsers, setUsers];
};

export default useUsers;
