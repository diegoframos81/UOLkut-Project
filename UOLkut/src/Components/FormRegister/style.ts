
import styled from "styled-components";

export const ContentFormRegister = styled.div`
form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 28em;
        height: 43.5em;
        flex-shrink: 0;
        border-radius: 16px;
        background: #FDFEFF;
        margin-left: 60rem;
        margin-top: -50rem;
        gap: 5px;
    }
    form img {
        width: 45px;
        height: 45px;
        padding-top: 10px;
        margin: 0 auto;
        
    }

    form h2 {
        color: #ED6D25;
        font-family: Roboto Flex;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        gap: 10px;
        margin-top: 5px;
        margin-bottom: 20px;
    }
    .containerInputs{
        display: flex;
        flex-direction: row;
        
        flex-wrap: wrap;
    }
    #first-column{
        width: 50%;
        display: flex;
        flex-direction: column;
        padding-right: 40px;
        gap: 20px;
    }
    #second-column {
        display: flex;
        flex-direction: column;
        padding-left: 40px;
        width: 50%;
        gap: 20px;
    }

    label {
        color: var(--input-text);
        font-family: Roboto Flex;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    #input-date, #input-country, #input-Job, #input-city, #input-select{
        width: 10rem;
        height: 3.5rem;
        flex-shrink: 0;
        border-radius: 8px;
        border: none;
        background: #EFF3F8;
        color: #868686;
        
        padding: 0.5rem;
        
        font-size: 16px;
        font-style: normal;
        line-height: normal;
        cursor: text;
    }

    input[type=date]:required:invalid::-webkit-datetime-edit {
        color: transparent;
    }
    input[type=date]:focus::-webkit-datetime-edit {
        color: black !important;
    }

    form input[type=submit]{
        display: none !important;
        

    }
    form input[type=email],[type=password], #input-name{
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
    
    label.id-name {
        position: absolute;
        top: 34rem;
        left: 83.5rem;
    }

    label.id-email {
        position: absolute;
        top: 22.5rem;
        left: 83.5rem;
    }

    label.id-password{
        position: absolute;
        top: 28.2rem;
        left: 83.5rem;
    }

    label.id-date{
        position: absolute;
        top: 39.7rem;
        left: 83.5rem;
    }

    label.id-country{
        position: absolute;
        top: 44.5rem;
        left: 83.5rem;
    }

    label.id-job {
        position: absolute;
        top: 39.5rem;
        left: 98rem;
    }

    label.id-city {
        position: absolute;
        top: 44.2rem;
        left: 98rem;
    }

    input:focus + label.id-email {
        

        font-size: 18px;
        top: 19.5rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }
    input:focus + label.id-password {
        font-size: 18px;
        top: 25.3rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:focus + label.id-name {
        font-size: 18px;
        top: 31.2rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:focus + label.id-date {
        font-size: 18px;
        top: 37rem;
        left: 82.7rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:focus + label.id-country {
        font-size: 18px;
        top: 41.9rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:focus + label.id-job {
        font-size: 18px;
        top: 36.9rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:focus + label.id-city {
        font-size: 18px;
        top: 41.8rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }
    
    input:valid + label.id-email {
        

        font-size: 18px;
        top: 19.5rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }
    input:valid + label.id-password {
        font-size: 18px;
        top: 25.3rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-name {
        font-size: 18px;
        top: 31.2rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-date {
        font-size: 18px;
        top: 37rem;
        left: 82.7rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-country {
        font-size: 18px;
        top: 41.9rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-job {
        font-size: 18px;
        top: 36.9rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }

    input:valid + label.id-city {
        font-size: 18px;
        top: 41.8rem;
        font-weight: bold;
        color: var(--orange);
        pointer-events:none;
        transition:0.2s ease-in; 
        -moz-transition:0.2s ease-in; 
        -webkit-transition:0.2s ease-in;
    }
`;
