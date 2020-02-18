import React from "react";
import "./Form.css"

function Form(props) {
    return(
        <form>
            <input type="text" id="fusername" name="fusername" className="input" placeholder="usuário do github" onChange={props.handleSearch}/>
            <input type="button" value="Buscar" className="button" onClick={props.handleSubmit}/>
        </form> 
    );
};

export default Form;