import styled from "styled-components";

export const ContainerUserHeaderInfo = styled.div`
    
    .user-profile-container {
  display: flex;
  
}

.user-profile-box {
  
  /* height: 854px; */
  flex-shrink: 0;
  background-color: #FDFEFF;
  border-radius: 16px;
  padding: 20px;
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
  background-color: #EFF3F8;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 10px;
  word-wrap: break-word;
  margin-bottom: 24px;
  font-size: var(--font-small);
}

.user-info-all>div {
  margin-bottom: 24px;
  font-size: var(--font-small);
}
`