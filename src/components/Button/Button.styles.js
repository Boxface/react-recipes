import styled from "styled-components";

const StyledButton = styled.button`
	user-select: none;
	font-size: 1em;
	color: white;
	font-family: Times New Roman;
	border-radius: 30px;
	background-color: #db0011;
	padding: 18px 36px;
	border: 2px solid #000000;
	cursor: pointer;
	Button-text::first-letter {
		text-transform: capitalize;
	}
`;

export default StyledButton;
