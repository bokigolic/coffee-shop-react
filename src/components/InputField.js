import { useState } from 'react';

const InputField = () => {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editMode) {
      const updatedUsers = users.map((user) => {
        if (user.id === editId) {
          return { ...user, name, email };
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
      setEditMode(false);
      setEditId(null);
    } else {
      const newUser = {
        id: new Date().getTime(),
        name,
        email,
      };
      setUsers([...users, newUser]);
    }
    setName('');
    setEmail('');
  }

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setEditMode(true);
    setEditId(id);
  }

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div>
      <h1>CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">{editMode ? 'Save' : 'Add'}</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InputField;
