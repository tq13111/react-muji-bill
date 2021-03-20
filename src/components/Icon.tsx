import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));}   // 目标文件夹
catch (error) {console.log(error);}
type  Props = {
  name: string,
  onClick?: () => void
}
const Icon = (props: Props) => {
  return (
    <svg onClick={props.onClick} className={`icon ${props.name}`}>
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};
export default Icon;
