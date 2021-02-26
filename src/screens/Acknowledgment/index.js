import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Container, Title, Subtitle, CheckAnswersButton, PlayAgainButton, ButtonText, TextBox, Result} from './styles';

const Acknowledgment = () => {

  const navigation = useNavigation();

  return (

    <Container>

      <TextBox>

        <Title>
          Thanks For Playing
        </Title>
        <Subtitle>
          That's your score
        </Subtitle>
        <Result>0/10</Result>
        <CheckAnswersButton onPress={() => navigation.navigate('Answers')}>
          <ButtonText>
            CHECK ANSWERS
          </ButtonText>
        </CheckAnswersButton>

        <PlayAgainButton onPress={() => navigation.navigate('Questions')}>
          <ButtonText>
            PLAY AGAIN
          </ButtonText>
        </PlayAgainButton>
      </TextBox>
    </Container>

  );
}

export default Acknowledgment;