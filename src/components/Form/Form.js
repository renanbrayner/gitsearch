import React from "react";
import "./Form.css"

function Form() {
    return(
        <form>
            <label for="fusername">Username</label>
            <input type="text" id="fusername" name="fusername"/>
            <input type="submit" value="Buscar" />
        </form> 
    );
};

export default Form;