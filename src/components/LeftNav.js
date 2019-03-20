import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import UnstyledHomeLogo from './HomeLogo';
import FrameBox from './FrameBox';
import Link from './Link';

const HomeLogo = styled(UnstyledHomeLogo)`
  margin-bottom: 10px;
`;

const UnstyledNav = props => <FrameBox as='nav' {...props} />;

const Nav = styled(UnstyledNav)`
  padding: 15px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-family: 'Enriqueta', serif;
`;

const NavItemTitleLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
`;

const NavItemTitle = styled.div`
  font-weight: 700;
`;

const SubList = styled.ul`
  list-style-type: none;
  padding-left: 10px;
`;

const SubListItemLink = styled(Link)`
  display: block;
  margin-bottom: 2px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SubListItem = styled.li``;

const UnstyledNavItem = ({ category, path, subitems, ...rest }) => (
  <li {...rest}>
    <NavItemTitleLink to={path}>
      <NavItemTitle>{category}</NavItemTitle>
    </NavItemTitleLink>

    <SubList>
      {subitems.map(({ subitem, path }, i) => (
        // <SubListItem key={i}>
        //   <Link to={path}>{subitem}</Link>
        // </SubListItem>

        <SubListItemLink to={path} key={i}>
          <SubListItem>{subitem}</SubListItem>
        </SubListItemLink>
      ))}
    </SubList>
  </li>
);

const NavItem = styled(UnstyledNavItem)`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LeftNav = ({ items, ...rest }) => (
  <div {...rest}>
    <HomeLogo src='/assets/logo.svg' text='Golob Art' />
    <Nav>
      <NavList>
        {items.map(item => (
          <NavItem key={item.category} {...item} />
        ))}
      </NavList>
    </Nav>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "left-nav" } }) {
          frontmatter {
            items {
              category
              path
              subitems {
                path
                subitem
              }
            }
          }
        }
      }
    `}
    render={data => (
      <LeftNav items={data.markdownRemark.frontmatter.items} {...props} />
    )}
  />
);
