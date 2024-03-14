import { Providers } from '@components/Providers';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { Layout } from '@components/shared/Layout';
import { Cursor } from '@components/Cursor';

export default function App({ Component, ...rest }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...rest} />
        <Cursor />
      </Layout>
    </Providers>
  );
}
