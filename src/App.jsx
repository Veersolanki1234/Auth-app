import { useState } from "react"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode " : "Dark Mode "}
      </button>

      <h1>Authorization App</h1>

      <Login />
      <Register />
    </div>
  )
}

export default App