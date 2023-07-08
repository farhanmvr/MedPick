import styled from 'styled-components';

export default function SvgIcon({ color, fill, icon }) {
  return (
    <IconContainer fill={fill} color={color}>
      {icon}
    </IconContainer>
  );
}

const IconContainer = styled.span`
  & path {
    stroke: ${(props) => props.color};
    border: ${(props) => props.color};
    ${({ fill, color }) => fill && `fill: ${color};`}
  }
`;
