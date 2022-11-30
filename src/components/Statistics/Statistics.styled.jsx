    import styled from '@emotion/styled';

    export const DataSection = styled.section`
    width: 400px;
    box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
    border-radius: 8px;
    margin: auto;
    margin-bottom: 64px;
    background-color: #f2fcfc;
    `;

    export const StatTitle = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    margin: 0;
    `;

    export const DataList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    list-style: none;
    
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 0;
  
    `;

    export const DataItem = styled.li`
    box-sizing: border-box;
    height: 65px;
    padding: 10px;
    color: white;
    background-color: ${props => props.color};
    width: 20%;
    
    `;

    export const Label = styled.span`
    display: block;
    `;

    export const Percentage = styled.span`
    display: block;
    margin-top: 5px;
    font-size: 18px;
    `;


