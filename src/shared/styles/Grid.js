import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;

  /* 576px */
  @media (min-width: 36em) {
    max-width: 54rem;
  }

  /* 768px */
  @media (min-width: 48em) {
    max-width: 72rem;
  }

  /* 992px */
  @media (min-width: 62em) {
    max-width: 96rem;
  }

  /* 1200px */
  @media (min-width: 75em) {
    max-width: 114rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`;

export const Col = styled.div`
  flex: 0 0 100%;
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  max-width: 100%;
  width: 100%;

  /* 768px */
  @media (min-width: 48em) {
    flex: 0 0 calc(100% / 2);
    max-width: calc(100% / 2);
  }

  /* 992px */
  @media (min-width: 62em) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
`;
