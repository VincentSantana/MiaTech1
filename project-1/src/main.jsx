import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TextInput from './TextInput.jsx'
import LoginForm from './LoginForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render( <App />)
ReactDOM.createRoot(document.getElementById('root1')).render(<TextInput />)
ReactDOM.createRoot(document.getElementById('root2')).render(<LoginForm />)