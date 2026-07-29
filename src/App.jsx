import { useState } from "react";
import Login from "./Login";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  if(!loggedIn){
  return (
  <Login 
    setLoggedIn={setLoggedIn}
    setRole={setRole}
  />
);
}
  return (
  
    <div className="dashboard">
      <Login />

      <h1>
        AI-Based End-to-End Secure <br />
        Examination Paper Management System
      </h1>
      <h2 className="welcome">
  Welcome, {role}
</h2>


      {/* Dashboard Cards */}

      <div className="cards">

        <div className="card">
          <div className="custom-icon">⧉</div>
          <h2>Total Papers</h2>
          <p>250</p>
        </div>


        <div className="card">
          <div className="custom-icon lock">◈</div>
          <h2>Encrypted Papers</h2>
          <p>250</p>
        </div>


        <div className="card">
          <div className="custom-icon user">◎</div>
          <h2>Active Users</h2>
          <p>15</p>
        </div>


        <div className="card">
          <div className="custom-icon alert">⚡</div>
          <h2>Security Alerts</h2>
          <p>03</p>
        </div>

      </div>



      {/* AI Monitoring */}

      <div className="status">

        <h2>AI Monitoring Status</h2>

        <h3>
          ● System Secure
        </h3>

        <p>
          AI continuously monitors paper encryption,
          unauthorized access and secure data transfer.
        </p>

      </div>




      {/* Paper Tracking */}

      <div className="tracking">

        <h2>Secure Paper Lifecycle Tracking</h2>


        <div className="flow">

          <p>🔐 Question Generation</p>
          <span>↓</span>

          <p>🌐 Secure Upload Portal</p>
          <span>↓</span>

          <p>☁ Encrypted Cloud Storage</p>
          <span>↓</span>

          <p>🧠 AI Threat Monitoring</p>
          <span>↓</span>

          <p>🖨 Secure Printing Unit</p>
          <span>↓</span>

          <p>🏫 Exam Centre Delivery</p>

        </div>

      </div>




      {/* Security Alerts */}
      {/* AI Analytics */}

<div className="analytics">

  <h2>📊 AI Security Analytics</h2>

  <div className="progress-box">

    <div>
      <h3>🔐 Encryption Status</h3>
      <div className="bar">
        <span style={{width:"100%"}}></span>
      </div>
      <p>100% Secure</p>
    </div>


    <div>
      <h3>🧠 AI Threat Detection</h3>
      <div className="bar">
        <span style={{width:"85%"}}></span>
      </div>
      <p>85% Monitoring</p>
    </div>


    <div>
      <h3>👤 User Verification</h3>
      <div className="bar">
        <span style={{width:"90%"}}></span>
      </div>
      <p>90% Verified</p>
    </div>


  </div>

</div>

      <div className="alerts">

        <h2>
          AI Security Intelligence Feed
        </h2>


        <ul>

          <li>
            🟢 Paper Encryption Completed - 10:30 AM
          </li>

          <li>
            🟡 Multiple Login Attempt Detected - 11:15 AM
          </li>

          <li>
            🔵 AI Verification Completed - 12:05 PM
          </li>

          <li>
            🔴 Unauthorized Access Blocked - 12:45 PM
          </li>

        </ul>

      </div>


    </div>
  );
}


export default App;