import styled from 'styled-components';

export const IssuesList = styled.ul`
list-style: none;
padding-top: 30px;
margin-top: 30px;
border-top: 1px solid #eee;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eeee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }
  img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 15px;
    }

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }

    }
    p {
        font-size: 12px;
        color: #999;
      }
`;

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p{
    font-size: 14px;
    margin-top: 5px;
    line-height: 1.4;
    color: #666;
    text-align: center;
    max-width: 400px;
  }
`;

