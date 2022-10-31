import React from 'react';
import styled from 'styled-components';
import coin from '../../assets/ethereum.png';
import bear from '../../assets/bear.png';

const PoolCard = ({ poolName, poolApy, poolTvl, poolDescription }) => {
  return (
    <StyledCard className="uk-card uk-card-default uk-card-body uk-inline">
      <div className="uk-flex uk-flex-center uk-margin-top">
        <img
          src={coin}
          className="uk-border-circle"
          width="40"
          height="40"
          alt="User Avatar"
        />
        <img
          src={bear}
          className="uk-border-circle"
          width="40"
          height="40"
          alt="User Avatar"
        />
      </div>

      <h4 className="uk-text-center uk-margin-remove">{poolName}</h4>

      <div className="uk-flex uk-flex-around uk-margin">
        <div className="uk-flex uk-flex-column">
          <h4>Rendimiento</h4>
          <p>{poolApy}</p>
        </div>
        <div className="uk-flex uk-flex-column">
          <h4>TVL</h4>
          <p>{poolTvl}</p>
        </div>
      </div>
      <div className="uk-flex uk-flex-column uk-margin">
        <h4>Descripción</h4>
        <p>{poolDescription}</p>
      </div>
      <div className="uk-flex uk-flex-center uk-margin">
        <button className="uk-button uk-button-primary">Depositar</button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 20px 40px 20px 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  h4 {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 900;
    text-align: center;
  }
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

export default PoolCard;
