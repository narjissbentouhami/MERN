import axios from "axios";
import { useState, useEffect } from "react";
import LivreList from "./LivreList";
import { Form,  Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Listing from "./Listing";


const Livre = () => {
  
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("loggedIn");
    navigate('/')
  }

  const [Livre, setLivre] = useState({
    
    title: "",
    description: "",
    image: "",
    
  }); 

  //const [genres, setGenres] = useState([]);

  const api = axios.create({
    baseURL: "http://localhost:8080/api/livre",
  });
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(Livre);
    try{
      await api.post("/", Livre).then((res) => {
        console.log(res.Livre);
        alert("book added successfully")
        
      });
    }catch(err){
      

    }
    
    
  };
  
const handleChange = (event) => {
    event.preventDefault();
    setLivre((prevLivre) => {
      return {
        ...prevLivre,
        [event.target.name]: event.target.value,
      };
    });
  };

  


  useEffect(() => {
    api.get("/").then((res) => {
      setLivre(res.Livre);
    });
  }, []);


  //d'ici
  const [genres,setGenres]=useState([])
  const getGenres = async()=>{
    try{
      const res = await axios.get("http://localhost:8081/api/genre/");
      console.log(res.data);
      setGenres(res.data);
       console.log(genres);
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
   getGenres();
  },[])







  return (
    <div className="app-wrapper">
      {/* <button onClick={logout} className="button-logout">logout
        </button> */}
      <h1 className="header">Créer un livre</h1>
      
        <Form>
        <Form.Group controlId="name">
          <Form.Label className="list-item">titre</Form.Label>
          <Form.Control
            className="task-input"
            type="text"
            name="title"
            placeholder="Entrer le titre du livre"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="prix">
          <Form.Label className="list-item">description</Form.Label>
          <Form.Control
            className="task-input"
            type="text"
            name="description"
            placeholder="Enter une description"
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group controlId="image">
          <Form.Label className="list-item">genre</Form.Label>
          <Form.Control
            className="task-input"
            type="text"
            name="image"
            placeholder="Entrer le genre du livre"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="button-add" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      
    
      <Listing></Listing>
      
    </div>
  );
};
export default Livre;
