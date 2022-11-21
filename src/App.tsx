import React from "react";
import GithubIcon from "./images/GitHubIcon.png";
import LinkedInIcon from "./images/LinkedInIcon.png";
import EmailIcon from "./images/EmailIcon.png";
import TottenhamLogo from "./images/TottenhamLogo.png";
import WarriorsLogo from "./images/WarriorsLogo.png";
import DodgersLogo from "./images/DodgersLogo.png";
import ChargersLogo from "./images/ChargersLogo.png";
import Headshot from "./images/Headshot.jpeg";

export const App = () => {
	return (
		<div className="flex flex-col items-center justify-between pt-12 h-screen">
			<div className="flex flex-col items-center sm:px-32 md:px-64 xl:px-96 px-6">
				<img
					src={Headshot}
					alt="Deon Choi head shot"
					className="rounded-2xl w-60 h-auto mb-8"
				/>
				<h1 className="text-5xl mb-6">Deon Choi</h1>
				<h3 className="text-lg sm:text-xl md:text-2xl mb-6 font-bold sm:font-normal">
					Full-Stack Software Engineer
				</h3>
				<p className="mb-12 text-lg">
					Originally from the San Francisco Bay Area, I have been living in
					Washington D.C for 7 years now. I primarily work with the MERN stack
					in addition to Typescript, PHP, and SQL.
					<br />I graduated from The George Washington University in May 2019
					with a Bachelor of Science in Statistics and a Minor in Computer
					Science.
				</p>

				<div className="mb-12 flex justify-around w-full max-w-md">
					<a
						href="https://www.linkedin.com/in/deon-choi-b3019b128/"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src={LinkedInIcon}
							alt="LinkedIn page for Deon Choi"
							className="h-10 w-auto transition duration-300 hover:scale-150"
						/>
					</a>
					<a
						href="https://github.com/deonchoi"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src={GithubIcon}
							alt="GitHub page for Deon Choi"
							className="h-10 w-auto transition duration-300 hover:scale-150"
						/>
					</a>
					<a
						href="mailto:deon.choi@gmail.com"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src={EmailIcon}
							alt="Email for Deon Choi"
							className="h-10 w-auto transition duration-300 hover:scale-150"
						/>
					</a>
				</div>
			</div>
			<div className="pb-8 flex justify-around items-center w-full max-w-full">
				<img
					className="w-auto sm:h-24 h-16"
					src={DodgersLogo}
					alt="Los Angeles Dodgers"
				/>
				<img
					className="w-auto sm:h-16 h-10"
					src={ChargersLogo}
					alt="Los Angeles Chargers"
				/>
				<img
					className="w-auto sm:h-24 h-16"
					src={TottenhamLogo}
					alt="Tottenham Hotspur"
				/>
				<img
					className="w-auto sm:h-24 h-16"
					src={WarriorsLogo}
					alt="Golden State Warriors"
				/>
			</div>
		</div>
	);
};

export default App;
