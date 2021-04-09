import * as React from 'react';
import Svg, {SvgProps, G, Circle, Path} from 'react-native-svg';

function SvgSucess(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <G fill="#2573D5">
        <Circle cx={256} cy={256} r={236.17} />
        <Path d="M256 512C114.853 512 0 397.167 0 256 0 114.853 114.853 0 256 0c141.167 0 256 114.853 256 256 0 141.167-114.833 256-256 256zm0-472.341C136.705 39.659 39.659 136.705 39.659 256S136.705 472.341 256 472.341 472.341 375.275 472.341 256c0-119.295-97.046-216.341-216.341-216.341z" />
      </G>
      <Path
        d="M225.066 350.191a19.807 19.807 0 01-14.139-5.929l-73.171-74.361c-7.674-7.813-7.575-20.345.238-28.039 7.813-7.654 20.365-7.575 28.039.238l58.458 59.409 120.941-133.195c7.396-8.11 19.929-8.685 27.999-1.348 8.11 7.357 8.705 19.889 1.348 28.019L239.74 343.706a19.833 19.833 0 01-14.277 6.504c-.139-.019-.258-.019-.397-.019z"
        fill="#F7F9FC"
      />
    </Svg>
  );
}

export default SvgSucess;