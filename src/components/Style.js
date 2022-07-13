import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
	smoky_black: '#0F0F0F',
	white: '#FBFBFB',
	steel_teal: '#587B7F',
}

export const GlobalStyles = createGlobalStyle`

*{
    background-color: ${colors.white};

    box-sizing: border-box;
}

html,body{
    width:100%;
    min-height:100vh;
    height:100%;

    font-family: 'Montserrat', sans-serif;

    margin:0;
    padding: 0;
}

#root{
  width: 100%;
  height: 100%;

  margin: 0 auto;
}

`

export const FitBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
`

export const Title = styled.div`
	color: ${colors.smoky_black};
	font-size: 3rem;
	font-weight: 500;

	padding: 2rem 0;
`

export const StyledButton = styled.form`
	width: 12.5%;
	height: fit-content;

	border-radius: 0.25rem;
	background-color: ${colors.steel_teal};

	color: ${colors.white};
	font-size: 1.5rem;
	font-weight: 500;

	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;

	margin: 2rem;

	cursor: pointer;

	transition: all 200ms ease-in;

	&:hover {
		transform: scale(1.1);
	}
`
