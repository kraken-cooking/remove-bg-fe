import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const ComparisonContainer = (props) => {
	const { originalImage, bgRemovedImage } = props;

	const [leftSize, setLeftSize] = useState(50);

	return (
		<div className="relative w-full max-w-4xl">
			<PanelGroup
				direction="horizontal"
				className="absolute z-20 w-full h-full"
			>
				<Panel
					defaultSize={50}
					minSize={0}
					onResize={(newSize) => {
						setLeftSize(newSize);
					}}
				></Panel>
				<PanelResizeHandle />
				<Panel defaultSize={50} minSize={0}></Panel>
			</PanelGroup>
			<img src={bgRemovedImage} alt="Original" className="w-full h-auto" />
			<img
				className="w-full h-full absolute z-10 top-0 left-0"
				src={originalImage}
				alt="Background Removed"
				style={{
					clipPath: `inset(0 ${100 - leftSize}% 0 0)`,
				}}
			/>
		</div>
	);
};
