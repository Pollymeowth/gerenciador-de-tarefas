import { TaskProvider } from './context/TaskContext'
import AddCategory from './components/AddCategory'
import AddTask from './components/AddTask'
import CategoryList from './components/CategoryList'
import './styles.css'

export default function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Gerenciador de Tarefas por Categoria</h1>
        <AddCategory />
        <CategoryList />
      </div>
    </TaskProvider>
  )
}
