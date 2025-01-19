const turnOnServo = () => {
  fetch("http://localhost:5000/servo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ command: "on" }),
  })
    .then((response) => response.text())
    .then((data) => console.log("Response from server:", data))
    .catch((error) => console.error("Error:", error));
};

// Function to send the "off" command (0°)
const turnOffServo = () => {
  fetch("http://localhost:5000/servo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ command: "off" }),
  })
    .then((response) => response.text())
    .then((data) => console.log("Response from server:", data))
    .catch((error) => console.error("Error:", error));
};

export { turnOffServo, turnOnServo };
