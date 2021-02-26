import React, { useState, useEffect, useContext } from 'react';
import { Text, useWindowDimensions, AsyncStorage } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import HTML from 'react-native-render-html';
import { Container, TextBox, Title, TrueButton, Category, FalseButton, ButtonText, Question } from './styles';

const QuestionsScreen = () => {

	const [questions, setQuestions] = useState({});
	const [cont, setCont] = useState(0);
	const [isLoaded, setIsLoaded] = useState(0);
	const [optionPressedByUser, setOptionPressedByUser] = useState(0);
	const [answerToBeStored, setAnswerToBeStored] = useState('');
	const [questionToBeStored, setQuestionToBeStored] = useState('');

	const navigation = useNavigation();
	const axios = require('axios');
	const contentWidth = useWindowDimensions().width;

    const questionsList = async () => {

    	axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
	    	 .then((response) => {
	    	 	setQuestions(response.data);
	    	 	setIsLoaded(1);

	     });

		 for (let i in questions.results) {

		    try{ 

		    	setQuestionToBeStored(questions.results[`${i}`].question); 

	   		    AsyncStorage.setItem(`@Question${i}Data:key`, questionToBeStored);
	   		    
		   	} catch (err) {
		   		console.log(err);
		   	}
		 }

    };

    const optionPressed = async (op) => {

    	setAnswerToBeStored(op);

    	try{

    		questions.results[cont].correct_answer === "True" && op === "True" 
    							    ? AsyncStorage.setItem(`@Question${cont}UserAnswer:key`, answerToBeStored)
    							   	: 
    								AsyncStorage.setItem(`@Question${cont}UserAnswer:key`, answerToBeStored);

    	} catch (err) {
    		console.log(err)
    	}

    }

    useEffect(() => {
    	questionsList();
    }, []);

	return (
		<>
			{cont < 10 && <Container>

				<TextBox>
					<ProgressBar progress={`${0}.${cont}`} 
								 width={200}
								 borderWidth={0}
								 height={10}
								 width={250}
								 borderRadius={20}
								 color={"white"}
								 unfilledColor={"rgba(255,255,255, 0.4)"}
								/>
					<Category>Category</Category>
					<Title>Question {cont+1}: </Title>
					<Question>
						{isLoaded ? questions.results[cont].question : ""}
					</Question>
				</TextBox>

				<TrueButton onPress={() => { 
					return ( 
						setCont(cont+1),
						optionPressed("True")
					);
				} 
				}>
		    		<ButtonText>TRUE</ButtonText>            
            	</TrueButton>

            	<FalseButton onPress={() => { 
					return ( 
						setCont(cont+1),
						optionPressed("False")
					);
				} 
				}>
		    		<ButtonText>FALSE</ButtonText>            
            	</FalseButton>

        	</Container> 
        	}
        	{cont === 10 && navigation.navigate('Acknowledgment')}
      </>

	);
}

export default QuestionsScreen;