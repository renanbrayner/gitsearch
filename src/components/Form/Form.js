import React from "react";
import "./Form.css"

function Form(props) {
    return(
        <div className="form">
            <input 
                type="text" 
                id="fusername" 
                name="fusername" 
                className="input" 
                placeholder="usuário do github" 
                onChange={props.handleSearch} 
                onKeyPress={props.handleKeyPress}
            />
            <input type="button" value="Buscar" className="button" onClick={props.handleSubmit}/>
        </div> 
    );
};

export default Form;