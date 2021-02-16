import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Card from '../src/components/Card';
import CardDestaque from '../src/components/CardDestaque';
import CardText from '../src/components/CardText';
import CardTitle from '../src/components/CardTitle';
import CardImage from '../src/components/CardImage';
import Footer from '../src/components/Footer';
import FooterIcon from '../src/components/FooterIcon';
import Logo from '../src/components/Logo';
import NavBar from '../src/components/NavBar';
import SectionTitle from '../src/components/SectionTitle';
import WrapperProjetos from '../src/components/WrapperProjetos';

export default function Home() {
  return (
    <>
      <Capa title="Bruno Noriller" subtitle="Portfolio" />
      <Cabecalho>
        Cabecalho
        <Logo>
          Logo
        </Logo>
        <NavBar>
          NavBar
        </NavBar>
      </Cabecalho>
      <WrapperProjetos>
        WrapperProjetos
        <SectionTitle>
          SectionTitle
        </SectionTitle>
        <Card>
          Card
          <CardImage>
            CardImage
          </CardImage>
          <CardTitle>
            CardTitle
          </CardTitle>
        </Card>
        <CardDestaque>
          CardDestaque
          <CardImage>
            CardImage
          </CardImage>
          <CardTitle>
            CardTitle
          </CardTitle>
          <CardText>
            CardText
          </CardText>
        </CardDestaque>
      </WrapperProjetos>
      <Footer>
        Footer
        <FooterIcon>
          FooterIcon
        </FooterIcon>
      </Footer>
    </>
  );
}
