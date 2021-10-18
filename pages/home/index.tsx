/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import style from '../home/style.module.css'

const Home: NextPage = () => {
	const [shownav, setShowNav] = useState(false)
	const onClick = () => setShowNav(!shownav)
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#ff0000"
				/>
				<meta name="msapplication-TileColor" content="#3e3e3e" />
				<meta name="theme-color" content="#ffffff" />
				<title>Indesfer</title>

				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
					integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className={style.body}>
				{/*NAVBAR*/}
				<nav className={style.nav}>
					<div className={style.arrow}>
						<button onClick={onClick}>
							<img src="arrow.png" alt="Arrow" height="30" />
						</button>
						{shownav ? <Text /> : null}
					</div>
				</nav>
				{/*HOME*/}
			</body>
		</>
	)
}

const Text = () => (
	<div className={style.navdiv}>
		<div className={style.logo}>
			<img src="logo.webp" alt="Indesfer Logo" />
		</div>

		<ul>
			<li>
				<a href="">Inicio</a>
			</li>
			<li>
				<a href="">Catálogo</a>
			</li>
			<li>
				<a href="">clientes</a>
			</li>
			<li>
				<a href="">contato</a>
			</li>
		</ul>
	</div>
)

export default Home
