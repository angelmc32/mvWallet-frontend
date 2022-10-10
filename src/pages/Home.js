import React, { Fragment } from 'react';
import styled from 'styled-components';
import SimpleCard from '../components/layout/elements/SimpleCard';
import PoolCard from '../components/layout/elements/PoolCard';

const Home = () => {
  return (
    <Fragment>
      <h2>XOC Data</h2>
      <StyledContainer>
        <div className="card-container">
          <SimpleCard
            title="Valor Total Depositado"
            description="$1,690,420.00 $XOC"
            additionalInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem cupiditate, amet fugiat, sint esse quia optio ea a dolore officiis, expedita dignissimos non unde! Reiciendis eveniet aliquam recusandae ipsum."
          />
        </div>
        <div className="card-container">
          <SimpleCard
            title="Rendimiento Promedio"
            description="8% APY"
            additionalInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem cupiditate, amet fugiat, sint esse quia optio ea a dolore officiis, expedita dignissimos non unde! Reiciendis eveniet aliquam recusandae ipsum."
          />
        </div>
        <div className="card-container">
          <SimpleCard
            title="Usuarios Activos"
            description="69 depositantes"
            additionalInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem cupiditate, amet fugiat, sint esse quia optio ea a dolore officiis, expedita dignissimos non unde! Reiciendis eveniet aliquam recusandae ipsum."
          />
        </div>
      </StyledContainer>
      <h2>Pools</h2>
      <StyledContainer>
        <div className="card-container">
          <PoolCard
            poolName="WETH/XOC"
            poolApy="3% APY"
            poolTvl="1300.23 ETH"
            poolDescription="Los titulares ganan comisiones por usar WETH para arbitrar el precio de XOC"
          />
        </div>
        <div className="card-container">
          <PoolCard
            poolName="USDC/XOC"
            poolApy="6% APY"
            poolTvl="420,699.69 USDC"
            poolDescription="Los titulares ganan comisiones por usar WETH para arbitrar el precio de XOC"
          />
        </div>
        <div className="card-container">
          <PoolCard
            poolName="XOC/XOC"
            poolApy="3% APY"
            poolTvl="33,123,987.23 XOC"
            poolDescription="Los titulares ganan comisiones por usar WETH para arbitrar el precio de XOC"
          />
        </div>
      </StyledContainer>
    </Fragment>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;

  h2 {
    margin-top: 0;
  }
  div.card-container {
    display: flex;
    justify-content: center;
    width: 90%;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    height: 100%;
    div.card-container {
      width: 30%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
  }

  @media screen and (min-width: 1366px) {
    width: 80%;
  }
`;

export default Home;
