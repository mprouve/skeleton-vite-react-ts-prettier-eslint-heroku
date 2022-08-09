import { MainContainer, Name, SecondaryName, PrimaryName } from './styled-components/landing'

const Landing = (): JSX.Element => {
  return (
    <MainContainer>
      <Name>
        <PrimaryName className="glitch-landing" data-text="UNDRGRND">
          <SecondaryName className="glitch-landing" data-text="THE">
            skeleton-vite-react-ts-prettier-eslint-heroku
          </SecondaryName>
          SKELETON
        </PrimaryName>
      </Name>
    </MainContainer>
  )
}

export default Landing
