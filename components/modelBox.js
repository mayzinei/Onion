import React from "react";

export default function ModelBox({ show, onClose, children }) {
	return (
		<div
			style={{
				transform: show ? "translateY(0%)" : "translateY(-200%)",
			}}
			className="absolute container top-14 left-0 transition-all duration-200"
		>
			<div className="container max-w-2xl mx-auto h-[80vh] bg-grayColor/20 backdrop-blur-md rounded-lg">
				<div className="flex justify-end">
					<button
						onClick={() => onClose(true)}
						className="px-3.5 py-2 bg-bgColor/50 rounded-full font-bold"
					>
						X
					</button>
				</div>
				{children}
			</div>
		</div>
	);
}
