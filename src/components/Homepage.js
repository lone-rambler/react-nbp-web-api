import React, { useState, useEffect } from 'react'
import { FitBox, Title, colors, StyledButton } from './Style.js'
import { Hint } from 'react-autocomplete-hint'
import iso4217 from '../iso4217.json'

export default function Homepage(props) {
	const [text, setText] = useState('')
	const [exchangeRate, setExchangeRate] = useState('')

	let hintArray = []
	iso4217.map((a) => hintArray.push(a.Entity))

	const getCurrency = async () => {
		let country = document.getElementById('name').value
		let code = iso4217.find(
			(el) => el.Entity == country.toUpperCase()
		).AlphabeticCode

		fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${code}/today`)
			.then((res) => {
				if (res.ok) {
					return res.json()
				} else {
					return null
				}
			})
			.then((data) => {
				// console.log('Output: ', data)
				setExchangeRate(data.rates[0].mid)
			})
	}

	return (
		<FitBox>
			<Title>NBP Web API</Title>
			<Hint options={hintArray} allowTabFill>
				<input
					id='name'
					value={text}
					style={{
						width: 'auto',
						height: 'fit-content',

						border: 'none',
						borderRadius: '0.25rem',
						outline: 'none',
						backgroundColor: colors.steel_teal,

						color: colors.white,
						fontSize: '1.5rem',
						textTransform: 'uppercase',
					}}
					onChange={(e) => {
						setText(e.target.value)
					}}
				/>
			</Hint>
			<StyledButton onClick={getCurrency}>SEARCH</StyledButton>
			{exchangeRate && <div>Rate: {exchangeRate}</div>}
		</FitBox>
	)
}
