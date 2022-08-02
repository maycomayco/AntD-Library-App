const API_URL = 'https://randomuser.me/api/?results=10';

const getUsers = async () => {
  return await fetch(API_URL)
    .then((resp) => resp.json())
    .then((resp) => resp.results)
    .catch((err) => console.error(err));
};

export default getUsers;
