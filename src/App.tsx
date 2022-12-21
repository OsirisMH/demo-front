import React from 'react';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant="contained">Hello World</Button>
    </React.Fragment>
  )
}

export default App
