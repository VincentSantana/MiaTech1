import ReactDOM from 'react-dom/client'
import App from './src/pages/App.jsx'
import TextInput from './src/components/TextInput.jsx'
import LoginForm from './src/pages/LoginForm.jsx'
import UncontrolledInput from './src/components/UncontrolledInput.jsx'
import "./index.css";


ReactDOM.createRoot(document.getElementById('root')).render( <App />)
ReactDOM.createRoot(document.getElementById('root1')).render(<TextInput />)
ReactDOM.createRoot(document.getElementById('root2')).render(<LoginForm />)
ReactDOM.createRoot(document.getElementById('root3')).render(<UncontrolledInput />)
