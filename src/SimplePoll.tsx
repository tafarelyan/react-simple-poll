import { Box, Button, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  {value: 'python', label: 'Python'},
  {value: 'c', label: 'C'},
  {value: 'c++', label: 'C++'},
  {value: 'java', label: 'Java'},
  {value: 'c#', label: 'C#'},
  {value: 'javascript', label: 'JavaScript'},
  {value: 'visual_basic', label: 'Visual Basic'},
  {value: 'go', label: 'Go'},
  {value: 'sql', label: 'SQL'},
  {value: 'fortran', label: 'Fortran'},
];

export default function SimplePoll({ onSubmit }) {
  const [selectedValue, setSeletecValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSeletecValue(event.target.value);
  }

  const handleSubmit = () => {
    if (selectedValue) {
      onSubmit(true);
    }
  }

  return (
    <Box sx={{ border: 1 }}>
      <Box sx={{ padding: '1rem', borderBottom: 1 }}>
        <Typography variant="h6">
          What's the most popular programming language?
        </Typography>
      </Box>
      <Box sx={{ padding: '1rem' }}>
        <RadioGroup
          value={selectedValue}
          onChange={handleChange}
          sx={{ flexGrow: 1 }}
        >
          <Grid container>
            {options.map((option, index) => (
              <Grid item xs={6} key={index}>
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </Box>
      <Box sx={{ padding: '1rem' }}>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
}