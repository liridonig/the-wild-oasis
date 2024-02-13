import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      @media (max-width: 991px) {
        width: 100%;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  @media (max-width: 991px) {
    padding: 1.2rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
