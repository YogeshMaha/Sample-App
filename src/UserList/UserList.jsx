import React, { useState } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', salary: 50000 },
    { id: 2, name: 'Bob', salary: 60000 },
    { id: 3, name: 'Charlie', salary: 45000 },
    { id: 4, name: 'David', salary: 70000 }
  ]);
  const [newName, setNewName] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editSalary, setEditSalary] = useState('');

  const handleAddUser = () => {
    if (newName.trim() && newSalary) {
      const newUser = {
        id: Date.now(),
        name: newName,
        salary: parseFloat(newSalary)
      };
      setUsers([...users, newUser]);
      setNewName('');
      setNewSalary('');
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEditUser = (id, name, salary) => {
    setEditId(id);
    setEditName(name);
    setEditSalary(salary.toString());
  };

  const handleUpdateUser = () => {
    setUsers(users.map(user =>
      user.id === editId ? { ...user, name: editName, salary: parseFloat(editSalary) } : user
    ));
    setEditId(null);
    setEditName('');
    setEditSalary('');
  };

  const calculateAverageSalary = () => {
    if (users.length === 0) return 0;
    const total = users.reduce((sum, user) => sum + user.salary, 0);
    return (total / users.length).toFixed(2);
  };

  return (
    <div className="user-container">
      <h2>User Management</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter salary"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            {editId === user.id ? (
              <div className="edit-group">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="number"
                  value={editSalary}
                  onChange={(e) => setEditSalary(e.target.value)}
                />
                <button onClick={handleUpdateUser}>Update</button>
              </div>
            ) : (
              <div className="user-info">
                <span>{user.name}</span>
                <span>₹{user.salary}</span>
                <div className="action-buttons">
                  <button onClick={() => handleEditUser(user.id, user.name, user.salary)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="summary">
        <strong>Average Salary:</strong> ₹{calculateAverageSalary()}
      </div>
    </div>
  );
}

export default UserList;
