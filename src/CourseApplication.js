import { Box, FormControl, InputLabel, Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'

function CourseApplication() {
  return (
    <div>
        <Container>
            <h2>Apply For A Course</h2>
            <Box>
                <div>
                    <FormControl>
                        <InputLabel>Course Name</InputLabel>
                        <input name='coursename' />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Course Duration</InputLabel>
                        <input name='courseperiod' />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Fees</InputLabel>
                        <input name='fees' />
                    </FormControl>
                </div>
            </Box>
                    <FormControl>
                        <Button type="submit">Submit</Button>
                    </FormControl>
        </Container>
    </div>
  )
}

export default CourseApplication;
