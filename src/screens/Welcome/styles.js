import styled from 'styled-components/native';
import ShipporiMincho from '../../../assets/fonts/ShipporiMincho-Regular.ttf'

export const Container = styled.View`

	flex: 1;
	background-color: #FF4747;

`;

export const TextBox = styled.View`

	flex: 1;
	align-items: center;
	align-self: center;
	justify-content: flex-end;
	width: 220px;
	height: 300px;

`;

export const Title = styled.Text`

	color: white;
	align-self: center;
	font-size: 48px;

`;

export const Subtitle = styled.Text`
	
	font-size: 15px;
	color: white;
	align-self: center;

`;

export const GetStartedButton = styled.TouchableOpacity`

	margin: 70px 20px 60px 20px;
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