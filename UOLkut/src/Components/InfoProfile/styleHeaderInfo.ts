import styled from "styled-components";

export const ContainerUserHeaderInfo = styled.div`
    
.user-profile-container {
  display: flex;
  
}

.user-profile-box {
  
  
  flex-shrink: 0;
  border-radius: 16px;
  padding: 15px;
  text-align: left;
  color: #4B4B4B;
  
}

.welcome-text {
  font-size: var(--font-largest);
  color: #4B4B4B;
  font-weight: 500;
  line-height: normal;
}

.user-info-all {
  text-align: left;
  color: #B4AEAE;
  
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.user-value {
  color: #4B4B4B;
  
  font-size: var(--font-small);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.user-info .balloon-box {
  background-color: transparent !important;
  
  border-radius: 10px;
  padding: 10px 10px;
  padding-left: 0px;
  margin-top: 10px;
  word-wrap: break-word;
  font-size: var(--font-small);
}

.user-info-all>div {
  margin-bottom: 24px;
  font-size: var(--font-small);
}
.balloon-box {
  overflow-x: hidden;
  height: 5rem;
}
.balloon-box img {
  
  margin-top: -1.5rem;
  width: 90%
}

.balloon-box p{
  margin-left: 20px;
  position: absolute;
  top: 15.5rem;
  
  
  
}

.user_details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.user_details div {
  display: flex;
  gap: 0.75rem;
}

.user_details div dt {
  color: var(--text);
}

.user_details div dd {
  color: var(--text);
}

.user_details span {
  color: var(--orange);
  cursor: pointer;
  font-size: var(--font-small);
}

.multiple_options_field_details {
  display: flex;
  align-items: center;
  
}

.firstchild{
    margin-top: 16rem;
}

.firstchild dd {
  margin-top: -0.5rem;
}

.multiple_options_field_details dd {
  padding: 0.5rem 1rem;

  color: var(--text);
  font-size: var(--font-small);

  border-radius: 30px;
  border: 1px solid var(--orange);
}
@media (max-width:1300px) {

  .balloon-box img {
    width: 100%
  }
  .balloon-box p{
    position: absolute;
    top: 73.5rem;
  }
}
@media (max-width: 1000px) {
  .balloon-box p{
    position: absolute;
    top: 77.2rem;
  }
}
@media (max-width: 800px) {

  .balloon-box img {
    width: 75%
  }

  .balloon-box p{
    position: absolute;
    top: 80.6rem;
  }

  .profileInfoContainer {
    width: 90%;
  }

  

  .user_details {
    font-size: .8rem;
  }

  .multiple_options_field_details dd,
  .multiple_options_field_details span {
    text-align: center;
    font-size: 0.7rem;
  }

  .multiple_options_field_details dd {
    font-size: 0.7rem;
  }
  .profileInfoContainer p{
    bottom: 68%;
  }
  .isMobile {
    display: none;
  }
}
`