import { useState } from 'react'
import { useTask } from '../context/TaskContext'

export default function AddTask({ categoryId }) {
  const { addTask } = useTask()
  const [text, setText] = useState('')

  function submit(e) {
    e.preventDefault()
    addTask(categoryId, text)
    setText('')
  }

  return (
    <form onSubmit={submit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button>Adicionar</button>
    </form>
  )
}
