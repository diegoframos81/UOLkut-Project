import styled from "styled-components";

export const CheckPassword = styled.div`

    div{
        display: inline-flex;  
        gap: 1rem;
        
    }    
    

    input {
        
        
        all:  inherit;
        border-style: solid transparent;
        border-radius: 6px;

        height: 1.25rem;
        width: 1.25rem;
        

        border-style: solid transparent;
        border-radius: 6px;
        outline: 1px solid #DCDCDC;
        outline-offset: 3px;
        box-shadow: 0px 0px 0px 3px var(--dark-25);
    }

    input:hover{
        cursor: pointer;
    }

    input:checked {
        transition: 0.5s;
        background-color: var(--orange);
        cursor: pointer;
    }

    label {
        margin-right: 11.5rem;
    
    color: #868686;
}

`