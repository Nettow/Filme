import obj from './App.module.css';
import Movie from './components/movie';
import call from './Api';
import { useState } from 'react';



function App() {
  const[filme, setFilme] = useState('');
  const[dadosF, setDados] = useState([]);
  
  
 const btn = async () =>{
 const dados = await call(filme);
 setDados(dados);

 setFilme('');


 }

  return (
    <>
   
    <div className={obj.container}>
      <h1>Movies</h1>

      <div className={obj.center}>

        <div className={obj.input}>
        
            <div>

             <input value = {filme} onChange={e=>setFilme(e.target.value)} placeholder='Escreva o filme'/>

            </div>
            <button className={obj.button} onClick={btn}>Procurar</button>
          

          
        </div>

      </div>
      
    </div>

      {dadosF && dadosF.map(Element => (

        <div className={obj.list}><Movie Poster={Element.Poster} Title={Element.Title} Year={Element.Year}/></div>
      ))}

      </>

  );
}

export default App
