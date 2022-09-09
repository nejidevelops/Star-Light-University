import { Box, FormControl, InputLabel } from '@mui/material';
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
                    </FormControl>
                </div>
            </Box>
        </Container>
    </div>
  )
}

export default CourseApplication;
