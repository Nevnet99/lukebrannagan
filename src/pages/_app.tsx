import { Providers } from '@components/Providers';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { Layout } from '@components/shared/Layout';

export default function App({ Component, ...rest }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...rest} />
      </Layout>
    </Providers>
  );
}
