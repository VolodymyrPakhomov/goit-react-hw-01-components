import styled from '@emotion/styled';
export const ProfileCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  width: 400px;
  box-shadow: 8px 8px 20px -6px rgba(212, 175, 55, 0.6);
  margin-bottom: 64px;
  padding: 0;
  background-color: #f2fcfc;
`;

export const Description = styled.div`
  padding: 30px;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  border-radius: 50%;
`;

export const Location = styled.p``;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Label = styled.span`
  display: block;
  text-align: center;
`;

export const Tag = styled.p``;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f3f6f9;
  li {
    width: 33.33%;
    border: 1px solid #e9eef3;
    padding: 10px;
  }
`;
