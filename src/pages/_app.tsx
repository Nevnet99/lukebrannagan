import { Providers } from '@components/Providers';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { Layout } from '@components/shared/Layout';
import { Cursor } from '@components/Cursor';
import { useBreakpoint } from '../hooks/useWindowSize';

export default function App({ Component, ...rest }: AppProps) {
  const breakpoint = useBreakpoint();
  const NOTTabletORMobile =
    breakpoint !== 'sm' && breakpoint !== 'md' && breakpoint !== 'lg';

  return (
    <Providers>
      <Layout>
        <Component {...rest} />
        {NOTTabletORMobile && <Cursor />}
      </Layout>
    </Providers>
  );
}
