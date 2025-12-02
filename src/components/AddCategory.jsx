import { useState } from 'react'
import { useTask } from '../context/TaskContext'

export default function AddCategory() {
  const [name, setName] = useState('')
  const { addCategory } = useTask()

  function submit(e) {
    e.preventDefault()
    addCategory(name)
    setName('')
  }

  return (
    <>
      <p>Adicionar Nova Categoria</p>
      <form onSubmit={submit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome da categoria"
        />
        <button>Adicionar</button>
      </form>
      <hr />
    </>
  )
}
