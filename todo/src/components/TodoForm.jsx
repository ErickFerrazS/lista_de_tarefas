import React from "react"

const TodoForm = () => {
    return (
        <>
            <h2>Criar tarefa:</h2>
            <form>
                <input type="text" placeholder="Digite o título" />
            </form>
            <select>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </>
    )
}

export default TodoForm