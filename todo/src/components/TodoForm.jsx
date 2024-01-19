import {useState} from "react"

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }

    return (
        <>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Digite o título" 
                    value={value}
                    onChange={(e) => setValue(e.target.value)} 
                />
                <button type="submit">Criar tarefa</button>
            </form>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option 
                    value=""
                >Selecione uma categoria
                </option>
                <option 
                    value="Trabalho">Trabalho
                </option>
                <option 
                    value="Pessoal">Pessoal
                </option>
                <option 
                    value="Estudos">Estudos
                </option>
            </select>
        </>
    )
}

export default TodoForm