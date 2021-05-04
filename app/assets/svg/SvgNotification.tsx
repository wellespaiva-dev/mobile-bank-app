import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgNotification(props: SvgProps) {
  return (
    <Svg height={512} viewBox="0 0 24 24" width={512} {...props}>
      <Path d="M21.379 16.913A6.698 6.698 0 0119 11.788V9c0-3.519-2.614-6.432-6-6.92V1a1 1 0 10-2 0v1.08C7.613 2.568 5 5.481 5 9v2.788a6.705 6.705 0 01-2.388 5.133A1.752 1.752 0 003.75 20h16.5c.965 0 1.75-.785 1.75-1.75 0-.512-.223-.996-.621-1.337zM12 24a3.756 3.756 0 003.674-3H8.326A3.756 3.756 0 0012 24z" />
    </Svg>
  );
}

export default SvgNotification;
