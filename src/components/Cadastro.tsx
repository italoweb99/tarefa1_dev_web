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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems:'center',
            backgroundColor: color,
            height: "100vh",
            width:"100vw",
            margin:'0px',
            padding: '0px'
            
        }}>
            <h1 style={
                {
                    padding: '0px',
                    marginTop: '50px'
                }
            }>{`Bem vindo,${localStorage.getItem('nome')} essa é sua lista de tarefas`}</h1>
            <form  onSubmit={handleSummit} style={{
                display:"flex",
                justifyContent: "flex-start",
                alignItems:'center',
                border: "1px solid black",
                borderRadius: "5px",
                height: "30px",
                width: '50vw',
                paddingLeft:"2px",
                backgroundColor:'white'
            }}>
       <input name = "name" type = "text" placeholder="Digite uma tarefa" onChange={handleRes} style={{
        outline: "none",
        border: "none",
        height: '28px',
        borderRadius: '5px',
        flexGrow: "1"
       }}/><br />
       <button type="submit" style={{
        height: '30px'
       }}>Enviar</button>
       </form>
       <div style={{
        width:'50vw'
       }}>
        <h1>Lista de tarefas: </h1>
            <ul>
                {     
            tarefas.map((tarefa,index)=>(
                
                <li key={index} style={{
                    fontSize: "20pt"
                }}>{tarefa}</li>
                
            ))
        }
            </ul>      
 </div>
 <div style={{
    width:"50vw",
    display: "flex",
    justifyContent:"space-between",
    marginTop: "10px"
 }}>
    <div>
    <input type="radio" value={'blueviolet'} checked={color === 'blueviolet'} name = ''onChange={()=>setColor('blueviolet')}/>
    <label>violetblue</label>
    </div>
    <div>
    <input type="radio" value={'cadetblue'} checked={color === 'cadetblue'} onChange={()=>setColor('cadetblue')}/>
    <label>cadetblue</label>
    </div>
    <div>
    <input type="radio" value={'cornsilk'} checked={color === 'cornsilk'} onChange={()=>setColor('cornsilk')}/>
    <label>cornsilk</label>
    </div>
 </div>

       </div>
    )

}
export default Cadastro