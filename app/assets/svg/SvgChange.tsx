import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import colors from '../colors';

function SvgChange(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        fill={colors.darkGray}
        d="M145.241 0C65.155 0 0 65.155 0 145.241s65.155 145.241 145.241 145.241 145.241-65.155 145.241-145.241S225.327 0 145.241 0zm0 269.584c-68.563 0-124.343-55.78-124.343-124.343S76.678 20.898 145.241 20.898s124.343 55.78 124.343 124.343-55.78 124.343-124.343 124.343z"
      />
      <Path
        fill={colors.darkGray}
        d="M225.036 65.444c-43.983-43.983-115.548-43.983-159.533 0-17.504 17.505-28.555 39.685-31.959 64.142-3.29 23.65 1.104 48.194 12.375 69.112 2.738 5.08 9.076 6.979 14.155 4.242 5.081-2.738 6.98-9.075 4.243-14.155-19.091-35.43-12.527-80.073 15.964-108.563 35.837-35.836 94.145-35.833 129.978-.001 35.836 35.836 35.836 94.145 0 129.98-28.49 28.49-73.135 35.054-108.563 15.963-5.084-2.737-11.419-.838-14.156 4.242s-.837 11.418 4.242 14.155c16.389 8.831 35.001 13.441 53.668 13.441 5.159 0 10.325-.353 15.444-1.066 24.458-3.402 46.637-14.454 64.142-31.958 43.982-43.984 43.982-115.55 0-159.534z"
      />
      <Path
        fill={colors.darkGray}
        d="M80.252 210.223c-4.079-4.079-10.729-4.047-14.81.033-4.08 4.081-4.08 10.698 0 14.778 2.041 2.041 4.714 3.06 7.388 3.06s5.348-1.02 7.39-3.062l.066-.066c4.081-4.079 4.047-10.663-.034-14.743zM155.69 135.569V98.323c6.972 3.233 11.726 9.589 11.726 16.89 0 5.771 4.679 10.449 10.449 10.449s10.449-4.678 10.449-10.449c0-18.736-13.908-34.504-32.624-38.859v-3.065c0-5.771-4.679-10.449-10.449-10.449s-10.449 4.678-10.449 10.449v3.065c-18.716 4.354-32.624 20.122-32.624 38.859 0 18.737 13.908 34.504 32.624 38.859v37.246c-6.972-3.233-11.726-9.589-11.726-16.89 0-5.771-4.679-10.449-10.449-10.449s-10.449 4.678-10.449 10.449c0 18.736 13.908 34.504 32.624 38.859v4.198c0 5.771 4.679 10.449 10.449 10.449s10.449-4.678 10.449-10.449v-4.198c18.716-4.354 32.624-20.122 32.624-38.859 0-18.737-13.908-34.504-32.624-38.859zm-20.898-3.467c-6.972-3.232-11.726-9.588-11.726-16.89 0-7.301 4.754-13.657 11.726-16.89v33.78zm20.898 59.216v-33.779c6.972 3.233 11.726 9.589 11.726 16.89 0 7.3-4.755 13.656-11.726 16.889zM395.014 409.993c-5.699 3.392-11.819 5.112-18.185 5.112-14.727 0-27.657-9.321-34.866-23.269h27.415c5.77 0 10.449-4.678 10.449-10.449s-4.679-10.449-10.449-10.449h-33.285a58.698 58.698 0 01-.187-4.6c0-.905.024-1.804.066-2.696h43.211c5.77 0 10.449-4.678 10.449-10.449s-4.679-10.449-10.449-10.449H341.03c6.988-14.996 20.412-25.173 35.799-25.173 6.368 0 12.487 1.72 18.185 5.112 4.96 2.952 11.371 1.324 14.323-3.635 2.951-4.959 1.324-11.372-3.635-14.323-8.851-5.267-18.834-8.052-28.874-8.052-26.742 0-49.567 19.235-58.165 46.071h-9.285c-5.77 0-10.449 4.678-10.449 10.449s4.679 10.449 10.449 10.449h5.689c-.03.896-.061 1.792-.061 2.696 0 1.547.062 3.077.149 4.6h-5.778c-5.77 0-10.449 4.678-10.449 10.449s4.679 10.449 10.449 10.449h9.936c9.051 25.833 31.411 44.167 57.513 44.167 10.038 0 20.022-2.785 28.874-8.052 4.959-2.951 6.587-9.363 3.635-14.323-2.949-4.958-9.36-6.586-14.321-3.635z"
      />
      <Path
        fill={colors.darkGray}
        d="M366.759 221.518c-80.086 0-145.241 65.155-145.241 145.241S286.673 512 366.759 512 512 446.845 512 366.759s-65.155-145.241-145.241-145.241zm0 269.584c-68.563 0-124.343-55.78-124.343-124.343s55.78-124.343 124.343-124.343 124.343 55.78 124.343 124.343-55.78 124.343-124.343 124.343z"
      />
      <Path
        fill={colors.darkGray}
        d="M446.554 286.962c-43.983-43.982-115.548-43.984-159.533 0-17.504 17.505-28.555 39.685-31.959 64.142-3.29 23.65 1.105 48.194 12.375 69.112 2.738 5.08 9.075 6.981 14.155 4.242 5.081-2.738 6.98-9.075 4.243-14.155-19.091-35.43-12.527-80.073 15.964-108.563 35.837-35.836 94.145-35.833 129.978-.001 35.836 35.836 35.836 94.145 0 129.98-28.49 28.49-73.134 35.054-108.563 15.963-5.084-2.737-11.419-.838-14.156 4.242s-.837 11.418 4.242 14.155c16.389 8.831 35.001 13.441 53.668 13.441 5.159 0 10.325-.353 15.444-1.066 24.458-3.402 46.637-14.454 64.142-31.958 43.983-43.984 43.983-115.55 0-159.534z"
      />
      <Path
        fill={colors.blue}
        d="M301.771 431.741c-4.079-4.079-10.729-4.047-14.81.033-4.08 4.081-4.08 10.698 0 14.778a10.413 10.413 0 007.388 3.06c2.675 0 5.348-1.02 7.39-3.062l.066-.066c4.08-4.078 4.046-10.662-.034-14.743zM166.51 426.59c-33.437-17.508-56.376-37.372-71.827-62.648l.401.136c5.461 1.855 11.399-1.068 13.256-6.533 1.856-5.464-1.068-11.399-6.533-13.255l-24.504-8.324c-5.376-1.832-11.437 1.156-13.256 6.533l-8.324 24.503c-1.856 5.464 1.069 11.399 6.533 13.255a10.45 10.45 0 003.362.558c4.352 0 8.416-2.742 9.893-7.092l.228-.672c17.39 29.427 43.225 52.23 81.076 72.052a10.445 10.445 0 0014.103-4.41c2.678-5.112.703-11.426-4.408-14.103zM449.377 132.055l-.304-.103.304.103c-5.469-1.856-11.399 1.069-13.256 6.531l-.266.785c-19.237-31.836-48.155-56.724-87.76-75.658-5.21-2.49-11.446-.286-13.935 4.92-2.489 5.207-.285 11.445 4.92 13.934 35.505 16.973 60.727 38.209 77.805 65.781l-.338-.115c-5.464-1.854-11.4 1.07-13.256 6.533-1.856 5.464 1.068 11.399 6.533 13.256l22.813 7.75c6.308 2.14 13.359-.646 15.297-7.066 2.369-7.844 7.971-23.396 7.971-23.396 1.861-5.465-1.064-11.399-6.528-13.255zM448.764 131.847l-.236-.08.236.08zM449.072 131.952l-.308-.105.308.105zM448.284 131.684l-.178-.06.178.06zM448.528 131.767l-.244-.083.244.083z"
      />
      <Path
        fill={colors.blue}
        d="M450.896 132.571c.071.024.067.023 0 0zM448.106 131.624l-.192-.065.192.065zM447.914 131.559c-.161-.055-.14-.048 0 0z"
      />
    </Svg>
  );
}

export default SvgChange;
