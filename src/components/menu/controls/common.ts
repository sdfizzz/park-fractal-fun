import { css } from 'styled-components';

const InputContainer = css`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default InputContainer;
