import GitHubIcon from "@assets/icons/github.svg?raw";
import LinkedInIcon from "@assets/icons/linkedin.svg?raw";
import WebsiteIcon from "@assets/icons/globe.svg?raw";
import EmailIcon from "@assets/icons/mail.svg?raw";

export default {
	title: "Stanisław Nieradko",
	createdAtYear: 2024,
	social: [
		{ type: "GitHub", url: "https://github.com/KanarekLife/", name: "KanarekLife", icon: GitHubIcon },
		{ type: "LinkedIn", url: "https://www.linkedin.com/in/stanislaw-nieradko/", name: "Stanisław Nieradko", icon: LinkedInIcon },
		{ type: "Website", url: "https://nieradko.com/", name: "nieradko.com", icon: WebsiteIcon },
		{ type: "Email", url: "mailto:stanislaw@nieradko.com", name: "stanislaw@nieradko.com", icon: EmailIcon },
	],
	menu: [
		{ name: "Home", url: "/" },
		{ name: "Articles", url: "/articles/" },
		{ name: "Contact", url: "/contact/" },
	],
};
