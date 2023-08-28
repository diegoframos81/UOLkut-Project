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

    form a{
        color: var(--orange);
    }

    form h2 {
        color: var(--orange);
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    form input[type=submit]{
        display: none !important;
        

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

    label {
        color: #868686;
    }
    
    label.id-email {
        position: absolute;
        top: 25rem;
        left: 83.5rem;
    }

    label.id-password{
        position: absolute;
        top: 31.5rem;
        left: 83.5rem;
    }

    input:focus + label.id-email {
        

        font-size: 18px;
        top: 21.6rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }
    input:focus + label.id-password {
        font-size: 18px;
        top: 28.3rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-email {
        

        font-size: 18px;
        top: 22.6rem;
        font-weight: bold;
        color: var(--orange);
    }

    input:valid + label.id-password {
        font-size: 18px;
        top: 29.3rem;
        font-weight: bold;
        color: var(--orange);
    }

    
`;

    
