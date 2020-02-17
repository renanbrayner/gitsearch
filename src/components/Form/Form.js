import React from "react";
import "./Form.css"

function Form() {
    return(
        <form>
            <input type="text" id="fusername" name="fusername" className="input" placeholder="usuário do github"/>
            <input type="submit" value="Buscar" className="button"/>
        </form> 
    );
};

export default Form;