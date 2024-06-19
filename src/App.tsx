import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SimplePoll from './SimplePoll';
import { useState } from 'react';

export default function App() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (value: boolean) => {
    setSubmitted(value);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Simple Poll App
        </Typography>
        {submitted ? null : <SimplePoll onSubmit={handleSubmit} />}
      </Box>
    </Container>
  );
}
