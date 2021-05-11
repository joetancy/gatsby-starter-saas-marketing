import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Tokenomics = () => (
  <Section id="tokenomics">
    <StyledContainer>
      <Subtitle>Tokenomics</Subtitle>
      <SectionTitle>888,888,888</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>8 Decimal Places</FeatureTitle>
          <FeatureText>
            Because we love the number 8.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>5% To Hodlers</FeatureTitle>
          <FeatureText>
           5% of each transaction will be automatically given to the token holder.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Automatic Liquid Pools</FeatureTitle>
          <FeatureText>
          5% of each transaction is automatically added to the liquidity pool.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Binance Smart Chain</FeatureTitle>
          <FeatureText>
            Developed on the Binance Smart Chain for DeFi applications.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>PancakeSwap</FeatureTitle>
          <FeatureText>PancakeSwap as our swap provider.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Deflationary</FeatureTitle>
          <FeatureText>
          Every transaction charges transaction fees and burns tokens.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Tokenomics

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
