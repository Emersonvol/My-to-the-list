import {useState } from 'react'
import './css/styles.css'


function App() {
  const [tarefa, setTarefa] = useState([])
  const [novaTarefa, setNovaTarefa] = useState("")

  function AddTarefa(e) {
    e.preventDefault()
    if (novaTarefa.trim() === "") return
    setTarefa([...tarefa, novaTarefa])
    setNovaTarefa('')
  }

  function limparTarefa() {
    setTarefa([])
  }

  return (
    <section className='container'>
      <h1 className='titulo'>Minha to the list</h1>
      <form className='formulario' onSubmit={AddTarefa}>
        <label htmlFor='txtTarefa'>Adicionar nova tafera: </label>
        <input
          type='text'
          id='txtTarefa'
          placeholder='Tarefa...'
          className='txtTarefa'
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)} />

        <button className='botao-adicaonar'>Adicionar</button>

        <ul className='tarefas-adicionadas'>
        {tarefa.map((tarefa,index)=>(
          <li key={index}>{tarefa}</li>
        ))}



        </ul>


      </form>
        <button className='botao-limpar' onClick={limparTarefa}>Limpar tudo</button>

    </section>
  )
}

export default App
