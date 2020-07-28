import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #2e4272;
`

export const HeaderContainer = styled.div`
  height: 124px; 
  /*background: #2e4272;*/
  background: whitesmoke;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 4px 0 0 4px;

  max-width: 1120px;
  margin: 0 auto;

  position: relative;

  a {
    text-decoration: none;
    transition: 0.2s;
    display: flex;
    align-items: center;

    strong {
      color: #162955;
      margin-left: 4px;
    }

    div {
      height: 35px;
      width: 35px;
      border: 2px outset #162955;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: #162955;
        height: 20px;
        width: 20px;
      }
    }

    &:hover {
      opacity: 0.2;
    }

    & + a {
      margin-top: 4px;
    }
  }

  img {
    position: absolute;
    border-radius: 50%;
    width: 120px;
    left: 44%;
  }

  select {
    position: absolute;
    right: 4px;
    bottom: 0px;
  }
`

export const Content = styled.div`
  min-height: 100vh;
  background: #2e4272;

  max-width: 1120px;
  margin: 0 auto;

  padding: 7px;

  border: 5px double whitesmoke;
  border-radius: 0%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    padding: 0 10px;
    border-left: 3px solid black;
    border-bottom: 1px solid whitesmoke;

    & + div {
      margin-top: 5px;
    }

    strong {
      font-size: 25px;
      color: whitesmoke;
      opacity: 0.9;
    }

    div {

      strong {
        color: black;

        & + strong {
          margin-left: 10px;
        }

        & + img {
          margin-left: 10px;
        }
      }

      img {
        height: 30px;
        width: 40px;

        & + img {
          margin-left: 10px;
        }
      }
    }

  }
`

export const Select = styled.select`
  width: 135px;
  height: 35px;
  background: #162955;
  font-size: 16px;
  border: none;
  color: whitesmoke;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.8);
  }

  option {
    color: whitesmoke;
    border: none;
  }
`
export const ButtonContainer = styled.div`
  max-width: 1120px;
  margin: 2px auto 0;
  height: 35px;
  display: flex;
  justify-content: center;

  button {
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;

    strong {
      font-size: 16px;
      color: whitesmoke;
    }
  }
`