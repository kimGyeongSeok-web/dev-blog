'use client';

import styled from '@emotion/styled';
import { color } from 'styles/styles';

const Footer = () =>{
  return(
    <FooterWrap>
      Copyright 2022. ciDev, All right reserved.
    </FooterWrap>
  )
}

const FooterWrap = styled.footer({
  color: color.PlaceholderColor,
  fontSize: '1rem',
  fontWeight: '500',
  textAlign: 'right'
})

export default Footer;