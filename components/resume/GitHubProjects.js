/** @jsx jsx */

import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

import { Section, Table } from './ResumeSection';
import Button from '../Button';
import Spinner from '../Spinner';


const FeaturedSection = styled.section`
  grid-column: ${props => props.halved ? 'span 1' : 'span 2'};
  border-right: ${props => props.halved ? '1px solid gray' : 'none'};
`;

const SearchSection = styled.section`
  padding-left: 20px;

  form {
    margin-bottom: 20px;
  }
`;

const ToggleSearch = styled(Button)`
  display: block;
  margin: auto;
  margin-top: 20px;
`;

const SearchButton = styled(Button)`
`;

const SearchInput = styled.input`
  padding: 5px 7px;
  font-size: 90%;
`;

const ErrorContainer = styled.div`
  padding: 10px;
  background-color: #ff7c7c;
  color: #fff;
`;

export default function GitHubProjects() {
  // GitHub search-related states
  const [inputQuery, setInputQuery] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  async function fetchSearchResults() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/code?q=${inputQuery}+user:ktran0918`
      );
      let responseBody = await response.json();
      console.log(responseBody);

      // filter out results from same repository
      let results = responseBody.items.filter((item, index, self) =>
        index === self.findIndex((duplicate) => (
          duplicate.repository.id === item.repository.id
        ))
      );
      let repos = results.map(result => result.repository);

      setError(false);
      setLoading(false);
      setRepos(repos);

    } catch (err) {
      if (error instanceof DOMException) {
        console.log('== HTTP request aborted');
      } else {
        setError(true);
        setLoading(false);
        console.error(err);
      }
    }
  } // end of fetchSearchResults()'s definition

  // Render
  return (
    <Section
      gridCol="span 3"
      headingBackground="#7DBBE6"
      headingColor="black"
    >
      <h2>GitHub Projects</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 50%" }}>
        {/* Featured projects */}
        <FeaturedSection halved={showSearch}>
          <Table>
            <tr>
              <th>
                <a href="https://github.com/ktran0918/resume">
                  Web Developer's Portfolio
            </a>
              </th>
            </tr>

            <tr>
              <td>
                <ul>
                  <li>
                    A <strong>Next.js</strong>-powered resume, blog, and contact form
                  </li>
                  <li>
                    Provides a GitHub search feature with which the user can look up my public repos
                  </li>
                </ul>
              </td>
            </tr>
          </Table>

          <Table>
            <tr>
              <th>
                <a href="https://github.com/ktran0918/marina-db">
                  Marina REST API
                </a>
              </th>
            </tr>

            <tr>
              <td>
                <ul>
                  <li>
                    Allows CRUD operations on boats, loads, and slips at a marina
                  </li>
                  <li>
                    Final project in Cloud Application Development course at OSU
                  </li>
                </ul>
              </td>
            </tr>
          </Table>
        </FeaturedSection>

        {/* GitHub search section */}
        {showSearch &&
          <SearchSection>
            <form
              onSubmit={e => { e.preventDefault(); fetchSearchResults(); }}
            >
              <SearchInput
                value={inputQuery}
                placeholder='search query'
                autoFocus
                onChange={e => { setInputQuery(e.target.value); }}
              />
              <SearchButton>Search GitHub</SearchButton>
            </form>

            {error && <ErrorContainer>Unable to fetch repos</ErrorContainer>}
            {loading ? (
              <Spinner />
            ) : repos &&
              <Table>
                {repos.map(repo => (
                  <>
                    <tr>
                      <th>
                        <a href={repo.html_url}>{repo.name}</a>
                      </th>
                    </tr>

                    <tr>
                      <td>{repo.description}</td>
                    </tr>
                  </>
                ))}
              </Table>
            }
          </SearchSection>
        }
      </div>

      {/* <div style={{ 'grid-column': 'span 2' }}> */}
      <ToggleSearch onClick={(e) => { setShowSearch(!showSearch); }}>
        {showSearch ? 'Hide search' : 'Search other GitHub repos'}
      </ToggleSearch>
      {/* </div> */}
    </Section>
  );
}