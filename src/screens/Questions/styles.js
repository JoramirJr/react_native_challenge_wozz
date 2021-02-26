import styled from 'styled-components/native';

export const Container = styled.View`

	flex: 1;
	background-color: #FF4747;

`;

export const TextBox = styled.View`

	flex: 1;
	align-self: center;
	justify-content: flex-end;
	width: 270px;
	margin-bottom: 50px;

`;

export const Title = styled.Text`

	color: white;
	align-self: center;
	font-size: 48px;
	margin-bottom: 20px;

`;

export const Question = styled.Text`
	
	font-size: 15px;
	color: white;
	align-self: center;
	margin: 10px 0 20px 0;
`;

export const TrueButton = styled.TouchableOpacity`

	margin: 0 20px 0px 20px;
	background-color: white;
	width: 280px;
	height: 70px;
	border-radius: 30px;
	align-self: center;

`;

export const FalseButton = styled.TouchableOpacity`

	margin: 20px 20px 100px 20px;
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

export const Category  = styled.Text`

	font-size: 16px;
	color: white;
	margin-top: 10px;

`;