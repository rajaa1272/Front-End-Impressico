import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal; 
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top:2px;
`;

const Announcement = () => {
  return <Container>
    <marquee>Super Deal! Free Shipping on Orders Over ₹500</marquee></Container>;
};

export default Announcement;