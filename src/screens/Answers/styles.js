import styled from 'styled-components/native';

export const Container = styled.View`

	flex: 1;
	background-color: #FF4747;

`;

export const TextBox = styled.View`

	flex: 1;
	justify-content: flex-start;
	width: 250px;
	margin-left: 20px;

`;

export const Title = styled.Text`

	color: white;
	align-self: center;
	font-size: 50px;

`;

export const ReturnButton = styled.TouchableOpacity`

	color: white;
	margin: 60px 0 10px 40px;


`;

export const Result = styled.Text`

	font-size: 55px;
	color: white;
	margin-left: 20px;

`;

export const HitsNMisses = styled.FlatList`
	
	width: 250px;
	
`;

export const QuestionBox = styled.View`
		
		height: 10px;

`;

export const Question = styled.Text`

	color: white;

`;