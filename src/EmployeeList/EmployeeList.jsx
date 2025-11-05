import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"; // For icons
// import "bootstrap/dist/css/bootstrap.min.css";
import "./EmployeeList.scss";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Yogesh Kumar",
      email: "yogesh.kumar@example.com",
      role: "UI Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      email: "anjali.sharma@example.com",
      role: "Backend Developer",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      email: "rahul.mehta@example.com",
      role: "Project Manager",
      status: "Active",
    },
  ]);

  const handleView = (id) => alert(`View Employee ID: ${id}`);
  const handleEdit = (id) => alert(`Edit Employee ID: ${id}`);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  return (
    <div className="employee-container d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 employee-card">
        <h4 className="text-center mb-4 fw-bold">Employee List</h4>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle text-center">
            <thead className="table-primary">
              <tr>
                <th>Employee Name</th>
                <th>Mail ID</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                  <td>
                    <span
                      className={`badge ${
                        emp.status === "Active"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => handleView(emp.id)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-success me-2"
                      onClick={() => handleEdit(emp.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(emp.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {employees.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-muted">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
