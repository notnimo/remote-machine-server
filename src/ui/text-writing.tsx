import { TypeAnimation } from "react-type-animation";

export function TextTyping({ toType }: { toType: string[] }) {
	return (
		<div
			style={{
				backgroundColor: "#000",
				color: "#0f0",
				fontFamily: "monospace",
				padding: "20px",
				borderRadius: "8px",
				width: "fit-content",
			}}
		>
			<TypeAnimation
				sequence={toType}
				wrapper="span"
				cursor={true}
				repeat={2}
				speed={75} // typing speed in ms per character
				deletionSpeed={30} // speed for deleting text
			/>
		</div>
	);
}
