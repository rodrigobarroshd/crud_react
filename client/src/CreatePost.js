import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,

            };
        })    
    } ;
  

    return (

        <div style={{width:"90%", margin: "auto auto", textAlign: "center" }}>
            <h1>Create a post</h1>
            <Form>
                <Form.Group>

                    <Form.Control 
                    name="title" 
                    value={post.title}
                    placeholder="Tittle" 
                    style={{marginBottom: "1rem"}} 
                    onChange={handleChange}
                    />
                    

                    <Form.Control 
                    name="description" 
                    value={post.description}
                    placeholder="Description" 
                    style={{marginBottom: "1rem"}}
                    onChange={handleChange}
                    />
                    


                </Form.Group>
            </Form>



            <Button 
            style={{width:"100%"}}
            variant="outline-dark"
            onClick={() => navigate(-1)}
            >BACK</Button>
        </div>
    );
}

export default CreatePost;