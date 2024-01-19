import {useState} from "react"

const TodoForm = (addTodo) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        console.log('alô?');
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
            </form>
            <select>
            <option 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}>Selecione uma categoria
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
            <button type="submit">Criar tarefa</button>
        </>
    )
}

export default TodoForm