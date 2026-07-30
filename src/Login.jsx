import { useState } from "react";

function Login({ setLoggedIn, setRole }) {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleLogin = () => {
    if (username.trim() !== "SVHEC" || password !== "SVHEC@123") {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        alert("🚨 Security Alert!\nToo many failed login attempts.");
      } else {
        alert("❌ Invalid Username or Password");
      }

      setUsername("");
      setPassword("");
      return;
    }

    setRole(selectedRole);
    setLoggedIn(true);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="security-logo">
          🛡️
        </div>

        <h1>AI Secure Exam Portal</h1>

        <p>End-to-End Examination Paper Management System</p>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option>Admin</option>
          <option>Question Setter</option>
          <option>Exam Controller</option>
          <option>Printing Unit</option>
        </select>

        <button onClick={handleLogin}>
          Secure Login
        </button>

        <div className="security-status">
          🟢 AI Security System Active
        </div>

      </div>
    </div>
  );
}

export default Login;