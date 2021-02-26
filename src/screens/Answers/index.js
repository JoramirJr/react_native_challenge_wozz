import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import ProgressBar from 'react-native-progress/Bar';
import { Container, TextBox, Title, Result, HitsNMisses, Question, QuestionBox, Category, ReturnButton, ButtonText, Subtitle } from './styles';

const AnswersScreen = () => {

	const [questionsStored, setQuestionsStored] = useState(['']);
	const [allSetUp, setAllSetUp] = useState(0);
	
	const navigation = useNavigation();

	let quest = "";

	const loadQuestions = async () => {

		for(let i = 0; i < 10; i++){

			quest = await AsyncStorage.getItem(`@Question${i}Data`);

			setQuestionsStored(quest);

		}

		await setAllSetUp(1);

	}

	useEffect(() => {
		loadQuestions();
	}, []);

	return (

			<Container>
			<ReturnButton onPress={() => navigation.goBack()} >
                <Feather name="arrow-left" size={30} color="white" />            
            </ ReturnButton>
				<TextBox>
					<Title>Answers</Title>

					<Result>0/10</Result>

					<HitsNMisses
				    />

				</TextBox>
		</Container>

    );

}

export default AnswersScreen;