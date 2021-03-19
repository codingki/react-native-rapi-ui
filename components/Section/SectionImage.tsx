import React from 'react';
import { Image, ImageSourcePropType, ImageProps, View } from 'react-native';

interface Props extends ImageProps {
	source: ImageSourcePropType;
	height?: number;
}

const SectionImage: React.FC<Props> = ({ source, height = 150, style }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Image style={[style, { height: height, flex: 1 }]} source={source} />
		</View>
	);
};

export default SectionImage;
