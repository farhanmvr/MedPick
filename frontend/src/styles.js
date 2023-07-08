import styled from 'styled-components';

export const RootContainer = styled.div`
  .ant-card {
    border-radius: 30px;
    background: #f8fbff;
    box-shadow: 0px 4px 8px -2px rgba(0, 79, 149, 0.25);
  }
  .ant-btn-primary {
    background-color: var(--color-primary);
    &:hover {
      background-color: rgba(0, 79, 149, 0.8) !important;
    }
  }
  & .btn-secondary {
    color: white;
    border: none;
    background-color: var(--color-secondary);
    &:hover {
      color: white !important;
      background-color: rgba(247, 129, 23, 0.8);
    }
  }
  .inpurt-search {
    border-radius: 50px;
    background: var(--light-blue-bg, #f0f8ff);
    box-shadow: 0px 2px 8px -2px rgba(0, 79, 149, 0.25);
    & input {
      background: var(--light-blue-bg, #f0f8ff);
    }
  }
  .card-title {
    color: #004f95;
    font-size: 25px;
    font-weight: 600;
    line-height: 73.373%;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .text-blue {
    color: #004f95;
  }
  .text-label {
    color: #004f95;
    font-size: 18px;
    font-weight: 400;
  }
  .ant-progress-outer {
    width: 100%;
  }
  .home-card-container {
    & .ant-card {
      height: 100%;
      & .ant-card-body {
        height: 100%;
      }
      & .card-body {
        margin: auto;
        height: 100%;
        display: grid;
      }
    }
    & .inservice-card {
      & .text-key {
        color: #004f95;
        font-size: 18px;
        font-weight: 400;
      }
      & .text-value {
        color: #004f95;
        font-size: 25px;
        font-weight: 600;
      }
    }
    & .assets-card {
      & .text-count {
        color: #004f95;
        font-size: 60px;
        font-weight: 700;
        text-transform: capitalize;
      }
    }
  }
  .ant-radio-button-wrapper-checked {
    background: var(--color-primary) !important;
  }
  .loading {
    height: 90vh;
    & .ant-spin-dot {
      font-size: 2rem;
    }
  }
`;
