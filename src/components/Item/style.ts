import styled from 'styled-components';

export const Warpper = styled.div`
  display: flex;
  padding: 40px 0px;
  border-bottom: 1px solid #ccc;
`;

export const ImageBox = styled.div`
  flex: 200px 0 0;
`;

export const Image = styled.img`
  display: block;
`;

export const Info = styled.div`
  flex: 1 0 0;
`;

export const Title = styled.strong`
  display: block;
  font-size: 24px;
  margin-top: 20px;
`;

export const Price = styled.strong`
  display: block;
  font-size: 34px;
  margin-top: 20px;
  color: #00bcd4;
`;

export const Category = styled.span`
  display: block;
  font-size: 24px;
  margin: 20px 0 40px;
`;

export const Description = styled.p`
  padding-bottom: 20px;
  font-size: 18px;
`;
