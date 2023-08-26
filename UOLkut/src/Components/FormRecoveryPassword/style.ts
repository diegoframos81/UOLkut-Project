import styled from 'styled-components';

export const FormsRecovery = styled.form`

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
        gap: 20px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    form img {
        width: 60px;
        height: 60px;
        padding-top: 20px;
        margin: 0 auto;
        
    }

    form a{
        color: var(--orange);
        padding-top: 5rem;
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

    form input[type=email] {
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
        top: 26.2rem;
        left: 83.5rem;
    }

    input:focus + label.id-email {
        

        font-size: 18px;
        top: 23.3rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-email {
        

        font-size: 18px;
        top: 23.3rem;
        font-weight: bold;
        color: var(--orange);
    }
    
`;

    
