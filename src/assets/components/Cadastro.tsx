import { useState, useEffect} from "react"

const Cadastro = () =>{
  const [tarefas,setTarefas] = useState([]);
  const [nome,setNome] = useState('');
  const[color,setColor] = useState('white');
  const tarefasStorage = localStorage.getItem('@tarefas');
  useEffect(()=>{
localStorage.setItem('@tarefas',JSON.stringify(tarefas));
  },[tarefas]);
  useEffect(()=>{
    const nome2 = prompt("digite seu nome");
   if(nome2) localStorage.setItem("nome",nome2);
  },[])
  useEffect(()=>{
   if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage));
   }
  },[])
    const handleRes = (e) =>{
        setNome(e.target.value);
    }
    const handleSummit = (e) =>{
        e.preventDefault()
        setTarefas([...tarefas,nome] );
    }
    return(
        <div style={{
            backgroundColor: color,
            height: "100vh",
            width:"100vw"
            
        }}>
            <h1>{`Bem vindo,${localStorage.getItem('nome')} essa é sua lista de tarefas`}</h1>
            <form  onSubmit={handleSummit}>
       <input name = "name" type = "text" placeholder="Digite uma tarefa" onChange={handleRes}/><br />
       <button type="submit">Enviar</button>
       </form>
       <div>
        
            <ul>
                {     
            tarefas.map((tarefa,index)=>(
                
                <li key={index}>{tarefa}</li>
                
            ))
        }
            </ul>      
 </div>
 <div>
    <input type="radio" value={'blueviolet'} checked={color === 'blueviolet'} name = ''onChange={()=>setColor('blueviolet')}/>
    <label>violetblue</label><br />
    <input type="radio" value={'cadetblue'} checked={color === 'cadetblue'} onChange={()=>setColor('cadetblue')}/>
    <label>cadetblue</label><br />
    <input type="radio" value={'cornsilk'} checked={color === 'cornsilk'} onChange={()=>setColor('cornsilk')}/>
    <label>cornsilk</label>
 </div>

       </div>
    )

}
export default Cadastro