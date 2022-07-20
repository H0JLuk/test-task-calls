import React from 'react';

import { Calls } from './components';
import { Navbar } from './components';

import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.wrapper}>
      <Navbar />

      <div className={styles.contentInner}>
        {/* for other content */}
        <div className={styles.callsInner}>
          <Calls />
        </div>
      </div>
    </main>
  );
}

export default App;
