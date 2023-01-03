'use client';

import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { ImageElement, color } from "styles/styles";

const SideNavigation = () => {

  // Hooks
  const router = useRouter();

  return (
    <SideNav>
      <LogoWrap>
        <ImageElement
          src="/logo.svg"
          width={1}
          height={1}
          layout={'responsive'}
          alt="Logo"
        />
      </LogoWrap>
      <GnbLists>
        <GnbList onClick={() => router.push('/')}>Home</GnbList>
        <GnbList onClick={() => router.push('/education')}>Education</GnbList>
        <GnbList onClick={() => router.push('/skils')}>Skils</GnbList>
        <GnbList onClick={() => router.push('/projects')}>Projects</GnbList>
        <GnbList onClick={() => router.push('/exp')}>Exp, Storage.</GnbList>
      </GnbLists>
    </SideNav>
  )
}

const SideNav = styled.div({
  width: '280px',
  height: 'calc(100vh - 48px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: color.White,
  zIndex: '3'
})
const LogoWrap = styled.div({
  width: '96px',
  height: '96px',
  cursor: 'pointer'
})
const GnbLists = styled.ul({
  margin: '12px 0 28px 0'
})
const GnbList = styled.li({
  color: color.PlaceholderColor,
  fontSize: '1.3rem',
  fontWeight: '200',
  margin: '12px 0 0 0',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  '::after': {
    content: '" "',
    width: '0',
    height: '2px',
    backgroundColor: color.White,
    display: 'inline-block',
    margin: '0 0 0 8px',
    transition: 'width 0.25s ease-in-out',
  },

  ':hover': {
    color: color.White,
    fontWeight: '300',

    '::after': {
      width: '48px',
    },
  }
})

export default SideNavigation;