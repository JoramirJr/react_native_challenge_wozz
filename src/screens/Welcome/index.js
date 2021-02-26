import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, TextBox, Title, GetStartedButton, ButtonText, Subtitle } from './styles';

const WelcomeScreen = () => {

	const navigation = useNavigation();

	function navigateToQuestions(){
		
		navigation.navigate('Questions');

	};

	return (

		<Container>
				<TextBox>
					<Title>Welcome to Trivia Challenge</Title>
					<Subtitle>
							  You will be presented 
							  with random 10 true or
							  false questions. 
							  Can you score 100% ?
					</Subtitle>
				</TextBox>

				<GetStartedButton onPress={() => navigateToQuestions()}>
		              <ButtonText>GET STARTED</ButtonText>            
            	</GetStartedButton>
		</Container>

	);
}

export default WelcomeScreen;