import styled from "@emotion/styled";

const Section = styled.section`
  grid-column: ${props => props.gridCol};
  padding: 20px;

  border-radius: 5px;
  background-color: #F0F0F0;
  border: 1px solid darkgray;
  box-shadow: 1px 1px 5px gray;
  transition: .3s;

  h2 {
    padding: 5px 0;
    text-align: center;
    background-color: ${props => props.headingBackground};
    color: ${props => props.headingColor};
  }

  i {
    color: #383838;
  }
  
  &:hover {
    box-shadow: 3px 3px 5px #181818;

    i.fa-briefcase {
      color: #501b00;
    }

    i.fa-linkedin {
      color: #0e76a8;
    }

    i.fa-github {
      color: #211F1F;
    }
  }

  @media(max-width: 900px) {
    grid-column: 1;
  }
`;


const Table = styled.table`
  width: 100%;

  th, td {
    &:first-of-type {
      text-align: left;
      font-size: 110%;
    }

    &:nth-of-type(2) {
      text-align: right;
      font-style: italic;
    }
  }

  th {
    &:first-of-type {
      font-size: 110%;
    }

    &:nth-of-type(2) {
      text-align: right;
    }
  }

  tr {
    &:nth-of-type(2) {
      th {
        font-weight: normal;
        font-variant: small-caps;
      }
    }
  }
`;


export { Section, Table };
// note: box-shadow like border-bottom: box-shadow: 0 2px 0 ${ props => props.headingColor; };