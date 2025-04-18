// src/components/DueDateModal.jsx
import React from "react";

function DueDateModal({ overdueTasks, onClose }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
      justifyContent: "center", alignItems: "center", zIndex: 9999
    }}>
      <div style={{
        background: "lightblue", padding: "20px", borderRadius: "10px",
        maxWidth: "400px", width: "90%", textAlign: "center"
      }}>
        <h2>Overdue Tasks</h2>
        {overdueTasks.map((task, index) => (
          <p key={index}>- {task.text} (Due: {task.dueDate})</p>
        ))}
        <button onClick={onClose} style={{
          marginTop: "15px", padding: "8px 16px",
          border: "none", background: "#007bff", color: "white", borderRadius: "5px"
        }}>Close</button>
      </div>
    </div>
  );
}

export default DueDateModal;