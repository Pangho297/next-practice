import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 20px;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const ItemTitle = styled.strong`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 160px;
  margin: 10px auto;
`;

export const Info = styled.span`
  display: block;
  margin-bottom: 10px;
  color: #999;
  text-align: center;
`;

export const Price = styled.strong`
  font-size: 17px;
  color: #00bcd4;
  font-weight: bold;
`;
