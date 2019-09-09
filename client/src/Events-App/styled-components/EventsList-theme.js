import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #DDD!important;
  width: 100%;

  div:nth-child(2) {
    width: 100%;
    overflow: hidden;
  }
`
export const Image = styled.div`
  width: 300px;
  display: flex;
  height: fit-content;
  
  img {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
`
export const Text = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  div > a {
    color: black;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.3px;

    &:hover {
      color: rgb(255, 126, 40);
    }
  }
  div > p {
    color: #524d46;
    font-family: serif;
    font-size: 16.5px;
    max-width: 640px;
  } 
  div > div {
    color: #524d46;
   
  }
`

