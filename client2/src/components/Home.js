import React,{useState,useEffect} from 'react'
import axios from 'axios'
import LivreList from './LivreList';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [Livre,setLivre]=useState([])
  const navigate = useNavigate();
  const img = "C:/Users/Lenovo/Desktop/react-jwt-auth-master/public/logo512.png";

  // affichage de tous les livres
  useEffect(()=>{
    const getLivre = async()=>{
      try{
        const res = await axios.get("http://localhost:8080/api/livre/");
        setLivre(res.data);
      }
      catch(err){
        console.log(err)
      }
    };getLivre();
  },[])

  const logout = ()=>{
    localStorage.removeItem("loggedIn");
    navigate('/')
  }

  
  const [counter, setCounter] = useState(0)
 
  const handleCommander = async () =>{
    setCounter(counter + 1)
    alert("commande créée avec succès!" )
    
  }

  return (
    <div>
      {/* <button onClick={logout} >logout</button> */}
       <h1>La liste des livres</h1> 
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Titre</th>
      <th scope="col">Description</th>
      <th scope="col">action</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
    <label>nombre de livres dans le panier :</label>
  {counter}
  {Livre.map(livre=>(
             <tr key={livre.id}>
      <th scope="row">{livre.id}</th>
      <td>{livre.title}</td>
      <td>{livre.description }</td>
      <td>
      <button type="button" onClick={e => handleCommander()} class="btn btn-danger">Commander</button>
      </td>
      <td><image src={img}></image></td>
      
      </tr>
      
        )
          
          )}
   
    
  </tbody>
</table>
        
    </div>
  )






}