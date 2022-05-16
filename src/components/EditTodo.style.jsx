import styled from 'styled-components';

/* The Modal (background) */
export const EditTodoModalDiv = styled.div`
  display: ${props => props.open? 'block': 'none'};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`

    /* Modal Content */
export const EditModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;  
`

/* The Close Button */
export const EditButton = styled.button`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
        &:hover,
        &:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
`