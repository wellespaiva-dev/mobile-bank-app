import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgSucess3(props: SvgProps) {
  return (
    <Svg height={512} viewBox="0 0 24 24" width={512} {...props}>
      <Path
        d="M21.25 0H2.75A2.752 2.752 0 000 2.75v18.5A2.752 2.752 0 002.75 24h18.5A2.752 2.752 0 0024 21.25V2.75A2.752 2.752 0 0021.25 0z"
        fill="#2573D5"
      />
      <Path
        d="M20.001 7.41l-9.228 10.5a.998.998 0 01-.718.339l-.033.001a1 1 0 01-.706-.291l-5.272-5.25a1.001 1.001 0 011.412-1.418l4.518 4.499 8.525-9.7a1 1 0 011.502 1.32z"
        fill="#F7F9FC"
      />
    </Svg>
  );
}

export default SvgSucess3;
