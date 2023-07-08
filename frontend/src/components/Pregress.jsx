import styled from 'styled-components';

export default function Progress({ percent, text, className, color, size }) {
  return (
    <ProgressContainer
      size={size}
      color={color}
      percent={percent}
      className={className}
    >
      <h1 className="text-label">{text}</h1>
      <div className="progress">
        <h1 className="flex align-middle justify-end progress-val">
          {percent}
        </h1>
      </div>
    </ProgressContainer>
  );
}

const ProgressContainer = styled.div`
  margin-right: 3.5rem;
  .progress {
    position: relative;
    height: ${(props) => (props.size === 'small' ? '20px' : '58px')};
    width: ${(props) => props.percent}%;
    border-radius: 10px;
    background: ${(props) => props.color};
    box-shadow: 2px 3px 2px -2px rgba(0, 79, 149, 0.25);
    & .progress-val {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(150%, -50%);
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
