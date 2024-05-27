import React, { useState } from 'react'

const App = () => {
  const [permission,setPermission] = useState(Notification.permission)
  const handleNotification = ()=>{
      if (permission === "granted") {
          const options = {
              body: "New message received from chat",
              icon: "icon.png",
              dir: "ltr"
          };
          const notification = new Notification("Notification Title", options);
          notification.onclick = function(event) {
              event.preventDefault(); // Prevent the browser from focusing the Notification's tab
              window.open('https://google.com', '_blank');
          };
      }
  }
    const requestPermission = () => {
      if (!("Notification" in window)) {
          alert("This browser does not support desktop notifications.");
      } else if (Notification.permission !== "granted") {
          Notification.requestPermission().then((permission) => {
              setPermission(permission);
          });
      }
  };
  return (
    <div>
      <button onClick={handleNotification}>nofification</button>
      <button onClick={requestPermission}>request</button>
    </div>
  )
}

export default App