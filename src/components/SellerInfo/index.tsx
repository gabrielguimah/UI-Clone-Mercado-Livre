import React from 'react';

import {
   Container,
   Title, 
   LocationCard, 
   LocationIcon, 
   ReputationCard, 
   ReputationThermometer, 
   ReputationRow, 
   SupportIcon, 
   ClockIcon, 
   More 
  } from './styles';

const SellerInfo: React.FC = () => {
  return (
  <Container>
    <Title>Informações do Vendedor</Title>

    <LocationCard>
      <LocationIcon />

      <div>
        <p>Localização</p>
        <strong>Joinville, Santa Catarina</strong>
      </div>

    </LocationCard>

    <ReputationCard>
      <ReputationThermometer>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li className="active"></li>
      </ReputationThermometer>
      <ReputationRow>
        <div>
          <strong>666</strong>
          <span>Venda nos últimos 4 meses</span>
        </div>

        <div>
          <strong><SupportIcon /></strong>
          <span>Presta um bom atendimento</span>
        </div>
        <div>

          <strong><ClockIcon /></strong>
          <span>Venda nos últimos 4 meses</span>
        </div>
      </ReputationRow>
    </ReputationCard>

    <More href="#">Ver mais dados do vendedor</More>

  </Container>
  );
};

export default SellerInfo;
