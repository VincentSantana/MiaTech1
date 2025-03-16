import ReactDOM from 'react-dom/client'
import App from './src/pages/App/App.jsx'
import TextInput from './src/components/TextInput.jsx'
import LoginForm from './src/pages/LoginForm/LoginForm.jsx'
import UncontrolledInput from './src/components/UncontrolledInput.jsx'
import "./index.css";
import { TodoProvider } from './src/components/TodoList/TodoList.jsx'


ReactDOM.createRoot(document.getElementById('root')).render( 
<TodoProvider> {/* devo usare il provider qui visto che renderizo il App */}
<App />
</TodoProvider>

)
ReactDOM.createRoot(document.getElementById('root1')).render(<TextInput />)
ReactDOM.createRoot(document.getElementById('root2')).render(<LoginForm />)
ReactDOM.createRoot(document.getElementById('root3')).render(<UncontrolledInput />)
