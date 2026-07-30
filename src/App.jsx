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
      

      <h1>
        AI-Based End-to-End Secure <br />
        Examination Paper Management System
      </h1>
      <div className="top-header">
  <h2 className="welcome">Welcome, {role}</h2>

  <button
    className="logout-btn"
    onClick={() => {
      setLoggedIn(false);
      setRole("");
    }}
  >
    Logout
  </button>
</div>
<div className="admin-profile">
  <h2>👤 Administrator Profile</h2>

  <p><strong>Name :</strong> SVHEC Admin</p>

  <p><strong>Role :</strong> {role}</p>

  <p><strong>Status :</strong> 🟢 Online</p>

  <p><strong>Access Level :</strong> High Security</p>
</div>
<div className="security-panel">

  <h2>🛡️ Live Security Status</h2>

  <div className="security-items">

    <p>🔐 Paper Encryption : <b>Active</b></p>

    <p>👤 User Authentication : <b>Verified</b></p>

    <p>🧠 AI Threat Monitoring : <b>Running</b></p>

    <p>🖨 Secure Printing : <b>Protected</b></p>

  </div>
  <div className="paper-tracking">

  <h2>🔐 Secure Paper Lifecycle Tracking</h2>

  <div className="tracking-step">

    <p>1️⃣ Question Generation</p>
    <span>↓</span>

    <p>2️⃣ Secure Upload Portal</p>
    <span>↓</span>

    <p>3️⃣ Encrypted Storage</p>
    <span>↓</span>

    <p>4️⃣ AI Security Verification</p>
    <span>↓</span>

    <p>5️⃣ Secure Printing Unit</p>
    <span>↓</span>

    <p>6️⃣ Exam Centre Delivery</p>

  </div>
  <div className="audit-log">

  <h2>🧠 AI Security Intelligence Feed</h2>

  <ul>
    <li>🟢 Paper Encryption Completed - 10:30 AM</li>

    <li>🟡 Multiple Login Attempt Detected - 11:15 AM</li>

    <li>🔵 AI Verification Completed - 12:05 PM</li>

    <li>🔴 Unauthorized Access Blocked - 12:45 PM</li>

  </ul>
<div className="printing-control">

  <h2>🖨 Secure Printing Control</h2>

  <p>Printer Status : 🟢 Connected</p>

  <p>Print Authorization : ✅ Approved</p>

  <p>Paper Copy Status : 🔐 Protected</p>

  <p>Unauthorized Print Attempts : 0</p>

</div>
<div className="ai-monitoring">

  <h2>📸 AI Monitoring & Threat Detection</h2>

  <p>📷 Camera Surveillance : 🟢 Active</p>

  <p>🖥 Screen Monitoring : 🟢 Enabled</p>

  <p>🚨 Threat Detection : 🟢 No Threat Found</p>

  <p>⚠️ Risk Level : Low</p>

</div>
<div className="paper-verification">

  <h2>📄 Question Paper Authentication</h2>

  <p>Paper ID : QP-SVHEC-001</p>

  <p>QR Verification : 🟢 Verified</p>

  <p>Encryption Key : 🔐 Valid</p>

  <p>Paper Status : ✅ Original Copy</p>

</div>
<div className="notification-panel">
  <h2>🔔 System Notifications</h2>

  <p>✅ Question Paper Uploaded Successfully</p>

  <p>🔐 Encryption Completed</p>

  <p>📤 Secure Transfer Completed</p>

  <p>🟢 AI Monitoring Active</p>
</div>
<div className="upload-panel">
  <h2>📄 Question Paper Upload</h2>

  <input type="file" />

  <button>Upload Secure Paper</button>

  <p>Status : Waiting for Upload</p>
</div>
<div className="approval-panel">

  <h2>✅ Question Paper Approval</h2>

  <p>Paper ID : QP-SVHEC-001</p>

  <p>Status : 🟡 Pending Approval</p>

  <button className="approve-btn">
    ✅ Approve
  </button>

  <button className="reject-btn">
    ❌ Reject
  </button>

</div>
<div className="analytics-report">

  <h2>📊 AI Security Analytics Report</h2>

  <div className="analytics-cards">

    <div>
      <div className="security-score">

  <h2>🛡 AI Security Score</h2>

  <div className="score-circle">
    98%
  </div>

  <p>Overall Security Status : Excellent</p>

</div>
      <h3>Total Papers</h3>
      <p>250</p>
    </div>

    <div>
      <h3>Encrypted Papers</h3>
      <p>250</p>
    </div>

    <div>
      <h3>Verified Papers</h3>
      <p>245</p>
    </div>

    <div>
      <h3>Security Score</h3>
      <p>98%</p>
    </div>

  </div>

</div>
</div>

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