import styled from 'styled-components';

export const FormsLogin = styled.form`

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 28em;
        height: 41.5em;
        flex-shrink: 0;
        border-radius: 16px;
        background: #FDFEFF;
        margin-left: 60rem;
        margin-top: -50rem;
        gap: 20px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    form img {
        width: 60px;
        height: 60px;
        padding-top: 10px;
        margin: 0 auto;
        
    }

    form h2 {

        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 5px;
        margin-bottom: 10px;
    }


    form input[type=email],[type=password] {
        width: 21em;
        height: 3.5em;
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
    
    label.id-email {
        position: absolute;
        top: 25.2rem;
        left: 83.5rem;
    }

    label.id-password{
        position: absolute;
        top: 32rem;
        left: 83.5rem;
    }

    input:focus + label.id-email {
        

        font-size: 18px;
        top: 22.6rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }
    input:focus + label.id-password {
        font-size: 18px;
        top: 29.3rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }
`;

