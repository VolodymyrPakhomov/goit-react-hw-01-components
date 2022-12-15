import styled from '@emotion/styled';

export const FriendUl = styled.ul`
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  width: 380px;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
  margin-bottom: 64px;
  padding: 0;
  background-color: #f2fcfc;
`;

export const FriendLi = styled.li`
  box-sizing: border-box;
  height: 65px;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 8px;
  margin-top: 15px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const StatusLine = styled.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${props => {
    switch (props.status) {
      case 'Online':
        return '#4caf50';
      case 'Offline':
        return '#f44336';
      default:
        return '#f44336';
    }
  }};
`;
export const Avatar = styled.img`
  border-radius: 4px;
  margin-right: 15px;
  margin: 0px 10px;
  border: 1px solid #f2f3f4;
`;
export const Name = styled.p`
  font-weight: 700;
  margin-left: 8px;
  margin-left: 8px;
  font-size: 24px;
  color: #f2f3f4;
`;
