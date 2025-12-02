import { useTask } from '../context/TaskContext'
import TaskList from './TaskList'
import AddTask from './AddTask'

export default function CategoryList() {
  const { categories } = useTask()

  return (
    <div>
      {categories.map(c => (
        <section key={c.id}>
          <h3>{c.name}</h3>
          <p>Adicionar Tarefa</p>
          <AddTask categoryId={c.id} />
          <TaskList categoryId={c.id} />
        </section>
      ))}
    </div>
  )
}
