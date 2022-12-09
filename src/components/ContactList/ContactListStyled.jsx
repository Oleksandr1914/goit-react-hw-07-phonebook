import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
`;

export const BlockItem = styled.div`
  display: flex;
  width: 300px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const BtnDelete = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  max-height: 38px;
`;

export const SpanName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
