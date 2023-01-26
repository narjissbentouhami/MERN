import React,{useState,useEffect} from 'react'
import axios from 'axios'
import LivreList from './LivreList';
import { useNavigate } from 'react-router-dom';


export default function Listing() {
  const [Livre,setLivre]=useState([])
  const navigate = useNavigate();

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
    navigate('/signin')
  }

  //Supprimer un livre
  const handleClickDelete = async (id,e) =>{
    console.log(id)
    try{
      await axios.delete(`http://localhost:8080/api/livre/${id}`) 
      const res = await axios.get("http://localhost:8080/api/livre/");
      setLivre(res.data);
      alert("book deleted successfully")
    }catch(err){
      console.log(err)
    }
  }
   //Mettre a jour un book
   const [book,setBook]=useState({
    title:"",
    description:"",
  });
  const handleChange=(e)=>{setBook((prev)=>({...prev,[e.target.name]:e.target.value}))};
  const handleClick = async (id,e) =>{
    try{
      console.log(book.titre)
      await axios.put(`http://localhost:8080/api/livres/${id}`,book)
      const res = await axios.get("http://localhost:8080/api/livres/");
      setBook(res.data);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <button onClick={logout} >logout</button>
       <h1>La liste des livres</h1> 
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titre</th>
      <th scope="col">genre</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
  {Livre.map(livre=>(
             <tr key={livre.id}>
      <th scope="row">{livre.id}</th>
      <td>{livre.title}</td>
      <td>{livre.description }</td>
      <td>
      <button type="button" onClick={e => handleClickDelete(livre.id)} class="btn btn-danger">Delete</button>
      </td>
    </tr>
        )
          
          )}
   
    
  </tbody>
</table>
        
    </div>
  )






}