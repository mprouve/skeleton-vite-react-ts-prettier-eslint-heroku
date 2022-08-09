import { useNavigate } from 'react-router-dom'
import {
  MainContainer,
  TextContainer,
  Text,
  ReturnContainer,
  ReturnButton
} from './styled-components/page-not-found'

const PageNotFound = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClickReturn = (): void => {
    navigate('/')
  }

  return (
    <MainContainer>
      <TextContainer>
        <Text>404</Text>

        <ReturnContainer>
          <ReturnButton onClick={handleClickReturn}>Return Home</ReturnButton>
        </ReturnContainer>
      </TextContainer>
    </MainContainer>
  )
}

export default PageNotFound
