/** @jsx jsx */

import Link from "next/link";
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled';
import { useState } from 'react';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid gray;
  background-color: #F0F0F0;
  box-shadow: 0 2px 10px lightgray;
  transition: .5s ease-out;

  ul {
    display: block;
    margin: 10px auto;
    padding: 0;
    text-align: center;
  }

  li {
    display: inline;
    padding: 10px 0;
    border-left: 1px solid lightgray;
  }

  li:first-of-type {
    border-left: none;
  }

  a {
    padding: 10px 20px;
    text-decoration: none;
    color: black;
    font-size: 105%;
  }

  a:hover {
    background-color: #ccc;
  }

  a:visited {
    color: inherit;
  }

  @media(max-width: 768px) {
    left: ${props => props.shown ? '0' : '-100%'};
    width: 70%;

    border-right: 1px solid gray;
    box-shadow: 2px 2px 10px lightgray;

    li {
      display: block;
      
      &:first-of-type {
        margin-top: 20px;
      }
    }
  }
`;

const ToggleNavButton = styled.button`
  position: absolute;

  font-size: 150%;
  background-color: transparent;
  border: 0;

  @media(min-width: 769px) {
    display: none;
  }
`;

const ShowNavButton = styled(ToggleNavButton)`
  top: 20px;
  left: 20px;
`;

const HideNavButton = styled(ToggleNavButton)`
  top: 15px;
  right: 15px;
`;


function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <ShowNavButton
        type="button"
        onClick={() => { setShowNav(true); }}
      >
        &#x2630;
      </ShowNavButton>

      <Navigation shown={showNav}>
        {/** Button to unhide navigation on smaller screens */}
        <ul>
          <li>
            <Link href='/'><a>Home</a></Link>
          </li>
          <li>
            <Link href='/resume'><a>Resume</a></Link>
          </li>
          <li>
            <Link href='/blog'><a>Blog</a></Link>
          </li>
          <li>
            <Link href='/about'><a>About</a></Link>
          </li>
          <li>
            <Link href='/contact'><a>Contact</a></Link>
          </li>
        </ul>

        <HideNavButton
          type="button"
          onClick={() => { setShowNav(false); }}
        >
          <strong>x</strong>
        </HideNavButton>
      </Navigation>
    </>
  );
}

export default Navbar;