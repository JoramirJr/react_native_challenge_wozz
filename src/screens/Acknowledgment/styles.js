import styled from 'styled-components/native';

export const Container = styled.View`

	flex: 1;
	background-color: #FF4747;

`;

export const TextBox = styled.View`

	flex: 1;
	align-self: center;
	justify-content: flex-end;
	width: 250px;
	margin-bottom: 50px;

`;

export const Title = styled.Text`

	color: white;
	align-self: center;
	font-size: 50px;

`;

export const Subtitle = styled.Text`
	
	font-size: 15px;
	color: white;

`;

export const CheckAnswersButton = styled.TouchableOpacity`

	margin: 0px 20px 0px 20px;
	background-color: white;
	width: 280px;
	height: 70px;
	border-radius: 30px;
	align-self: center;

`;

export const PlayAgainButton = styled.TouchableOpacity`

	margin: 15px 20px 100px 20px;
	background-color: white;
	width: 280px;
	height: 70px;
	border-radius: 30px;
	align-self: center;

`;


export const ButtonText = styled.Text`
	
	font-size: 15px;
	align-self: center;
	margin-top: 20px;
	color: #ea1b1b;

`;

export const Result = styled.Text`

	font-size: 55px;
	color: white;
	margin-bottom: 30px;

`;