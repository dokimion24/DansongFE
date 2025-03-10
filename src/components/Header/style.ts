import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const Header = styled.header`
  background-color: ${theme.colors.header};
  height: 4.2rem;

  &:hover {
    background-color: ${theme.colors.black};
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10rem;
`;

export const Menu = styled.li`
  font-size: 1.4rem;
  color: #f5f5f7;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.white};
  }
`;
