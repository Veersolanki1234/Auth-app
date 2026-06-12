import { useState } from "react"
import Input from "../components/Input"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleLogin() {  
    setError("")
    setSuccess("")

    if (!email || !password) {
      setError("All fields are required")
      return
    }

    setSuccess("Login successful")
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
      label="Password"
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <button onClick={handleLogin}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  )
}

export default Login