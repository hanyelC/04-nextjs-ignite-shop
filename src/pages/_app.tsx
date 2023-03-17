import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import logoImg from '@/assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Image from 'next/image'

const roboto = Roboto_Flex({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image {...logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
