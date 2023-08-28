import styled from "styled-components";

export const ContainerEditProfile = styled.div`

    border-radius: 8px;
    border: none;
    margin-top: 7.5rem;
    background: var(--white);
    width: 100%;
    display: flex;
    border-radius: 16px;
    flex-direction: column;
    padding: 24px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    

    h2 {
        color: #ED6D25;
        font-family: Roboto Flex;
        font-size: 2.3rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        gap: 10px;
        margin-left: 15rem;
        margin-top: 5px;
        margin-bottom: 2.5rem;
    }

input[type="submit"]{
  display: none;
}

label {
        color: var(--input-text);
        font-family: Roboto Flex;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

  .first-column{
    width: 50%;
  }
  .second-column{
    position: relative;
    top: -34.3rem;
    width: 50%;
    
    margin-left: 25rem;
    
  }

form input[type=text],[type=password], [type=date] {
        width: 17em;
        height: 3em;
        flex-shrink: 0;
        border-radius: 8px;
        border: none;
        background: #EFF3F8;
        color: #868686;
        margin-bottom: 21.5px;
        padding: 1.25rem;
        
        font-size: 19px;
        font-style: normal;
        line-height: normal;
        cursor: text;
        
    }
    #input-select{
        
        width: 14em;
        height: 3.4rem;
        flex-shrink: 0;
        border-radius: 8px;
        border: none;
        background: #EFF3F8;
        color: #868686;
        
        padding-left: 0.5rem;
        
        font-size: 19px;
        font-style: normal;
        line-height: normal;
        appearance: none;
    }

    select option{
      border-bottom: #ED6D25;
    }

    .caretDown{
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        top: 15rem;
        left: 93rem;
    }

    .SaveButtom{
      display: flex;
      
      margin-left: 7.5rem;
    }
`
