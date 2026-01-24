import { TypeAnimation } from "react-type-animation";

export function TextTyping({ toType }: { toType: string[] }) {
	return (
		<div className="p-5 w-fit">
			<TypeAnimation
				sequence={toType}
				wrapper="div"
				cursor={true}
				repeat={1}
				speed={75}
				style={{ fontSize: "2rem", fontWeight: "bold" }}
			/>
		</div>
	);
}
