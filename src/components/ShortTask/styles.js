import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  height: 2.75rem;
  border: 0;
  padding: 0 1rem;
  border-radius: 0.43rem;
  font-size: 0.87rem;
  
  display: flex;
  align-items: center;
  gap: .4375rem;

  > svg {
    font-size: 1.12rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
`;