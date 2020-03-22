/** @jsx jsx */

import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import Navbar from "./Navbar";


const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i|Cormorant+Garamond:400,400i,700,700i&display=swap');

  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', 'sans-serif';
  }

  h1, h2 {
    font-family: 'Cormorant Garamond', 'Helvetica', 'serif';
  }

  h1 {
    text-align: center;
  }
`;

const BufferDiv = styled.div`
  height: 50px;
`;

function Layout(props) {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Navbar />
      <BufferDiv />
      {props.children}
    </React.Fragment>
  );
}


export default Layout;