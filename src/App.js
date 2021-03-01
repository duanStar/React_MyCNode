import React from 'react';
import Router from './routes/index';
import Header from './component/header';
import {Layout} from 'antd';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <main id='main'>
          <Router />
          </main>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
