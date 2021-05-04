import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import colors from '../colors';

function SvgSend(props: SvgProps) {
  return (
    <Svg height={512} viewBox="0 0 512 512" width={512} {...props}>
      <Path
        fill={colors.blue}
        d="M256 270.158c8.822 0 16 7.178 16 16a8 8 0 0016 0c0-14.883-10.214-27.426-24-30.987v-9.013a8 8 0 00-16 0v9.013c-13.786 3.562-24 16.104-24 30.987 0 17.645 14.355 32 32 32 8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16a8 8 0 00-16 0c0 14.883 10.214 27.426 24 30.987v9.013a8 8 0 0016 0v-9.013c13.786-3.562 24-16.104 24-30.987 0-17.645-14.355-32-32-32-8.822 0-16-7.178-16-16s7.178-16 16-16z"
      />
      <Path
        fill={colors.blue}
        d="M256 206.158c-57.346 0-104 46.654-104 104s46.654 104 104 104 104-46.654 104-104-46.654-104-104-104zm0 192c-48.523 0-88-39.477-88-88s39.477-88 88-88 88 39.477 88 88-39.477 88-88 88z"
      />
      <Path
        fill={colors.darkGray}
        d="M487.063 174.158l-5.114-40.913c-1.656-13.25-13.79-22.631-27.134-20.792l-11.581 1.656-7.522-30.087a23.987 23.987 0 00-29.603-17.332L22.789 174.189C10.116 174.822 0 185.331 0 198.158v224c0 13.233 10.767 24 24 24h464c13.233 0 24-10.767 24-24v-224c0-12.394-9.596-24-24.937-24zm-30.023-45.861a7.997 7.997 0 019.031 6.933l4.866 38.929H136.422zm-46.69-46.179a7.996 7.996 0 019.841 5.785l7.121 28.484-284.027 40.627zM496 422.158c0 4.411-3.589 8-8 8H24c-4.411 0-8-3.589-8-8v-224c0-4.405 3.58-7.99 7.983-7.999 2.534-.005-39.895-.001 464.017-.001 4.411 0 8 3.589 8 8z"
      />
      <Path
        fill={colors.darkGray}
        d="M472 230.158c-8.822 0-16-7.178-16-16a8 8 0 00-8-8H344a8 8 0 000 16h97.013c2.9 11.229 11.759 20.087 22.987 22.987V375.17c-11.229 2.9-20.087 11.759-22.987 22.987H344a8 8 0 000 16h104a8 8 0 008-8c0-8.822 7.178-16 16-16a8 8 0 008-8v-144a8 8 0 00-8-7.999zM168 398.158H70.987c-2.9-11.229-11.759-20.087-22.987-22.987V245.145c11.229-2.9 20.087-11.759 22.987-22.987H168a8 8 0 000-16H64a8 8 0 00-8 8c0 8.822-7.178 16-16 16a8 8 0 00-8 8v144a8 8 0 008 8c8.822 0 16 7.178 16 16a8 8 0 008 8h104a8 8 0 000-16z"
      />
      <Path
        fill={colors.darkGray}
        d="M72 310.158c0 13.233 10.767 24 24 24s24-10.767 24-24-10.767-24-24-24-24 10.767-24 24zm32 0c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8 8 3.589 8 8zM440 310.158c0-13.233-10.767-24-24-24s-24 10.767-24 24 10.767 24 24 24 24-10.766 24-24zm-32 0c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8z"
      />
    </Svg>
  );
}

export default SvgSend;
