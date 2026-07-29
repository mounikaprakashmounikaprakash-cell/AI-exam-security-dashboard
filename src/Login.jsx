import{useState}from"react";
function Login({ setLoggedIn,setRole}){
const [selectedRole, setSelectedRole] =
 useState("Admin");
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="security-logo">
          🛡️
        </div>

        <h1>
          AI Secure Exam Portal
        </h1>

        <p>
          End-to-End Examination Paper Management System
        </p>


        <input
          type="text"
          placeholder="Enter Username"
        />


        <input
          type="password"
          placeholder="Enter Password"
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


        <button
  onClick={() => {
    setRole(selectedRole);
    setLoggedIn(true);
  }}
>
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