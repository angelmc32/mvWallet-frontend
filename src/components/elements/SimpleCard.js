import React from 'react';
import styled from 'styled-components';

const SimpleCard = ({ title, description, additionalInfo }) => {
  return (
    <StyledCard className="uk-card uk-card-default uk-card-body">
      <h4>{title}</h4>
      <p>{description}</p>
      <div>
        <span uk-icon="info" />
        {/* <div uk-dropdown="pos: bottom-right">{additionalInfo}</div> */}
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 20px 30px 20px 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  h4 {
    width: 45%;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 900;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 45%;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }
  div {
    width: 10%;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    h4,
    p {
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }
  }
`;

export default SimpleCard;
