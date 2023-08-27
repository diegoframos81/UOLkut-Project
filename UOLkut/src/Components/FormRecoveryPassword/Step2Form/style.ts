import styled from 'styled-components';

export const FormsRecoveryPassword = styled.form`

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 28em;
        height: 41.5em;
        flex-shrink: 0;
        border-radius: 16px;
        background: #FDFEFF;
        margin-left: 60rem;
        margin-top: -50rem;
        gap: 5px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    form img {
        width: 60px;
        height: 60px;
        padding-top: 20px;
        margin: 0 auto;
        
    }

    form a{
        font-size: var(--font-small);
        color: var(--orange);
        padding-top: 3rem
        
    }

    form h2 {
        color: var(--orange);
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 5px;
        margin-bottom: 25px;
    }

    form input[type=submit]{
        display: none !important;
        

    }

    form input[type=text], [type=password] {
        width: 21em;
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

    label {
        color: #868686;
    }
    
    label.id-code {
        position: absolute;
        top: 24rem;
        left: 83.5rem;
    }

    input:focus + label.id-code {
        

        font-size: 18px;
        top: 21.4rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-code {
        

        font-size: 18px;
        top: 21.4rem;
        font-weight: bold;
        color: var(--orange);
    }
    
    label.id-password {
        position: absolute;
        top: 29.3rem;
        left: 83.5rem;
    }

    input:focus + label.id-password {
        

        font-size: 18px;
        top: 26.8rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-password {
        
        font-size: 18px;
        top: 26.8rem;
        font-weight: bold;
        color: var(--orange);
    }

    label.passwordConfirmed{
        position: absolute;
        top: 34.5rem;
        left: 83.5rem;
    }

    input:focus + label.passwordConfirmed {
        

        font-size: 18px;
        top: 32rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.passwordConfirmed {
        
        font-size: 18px;
        top: 32rem;
        font-weight: bold;
        color: var(--orange);
    }
`;

    
