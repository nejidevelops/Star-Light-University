import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function TeachersDetails({allTeachers, deleteTeacher}){
    
    const navigate = useNavigate();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Teacher_id</StyledTableCell>
            <StyledTableCell>Teacher_Name</StyledTableCell>
            <StyledTableCell align="right">Specialisation</StyledTableCell>
            <StyledTableCell align="right">Home_address</StyledTableCell>
            <StyledTableCell align="right">Salary&nbsp;($)</StyledTableCell>
            <StyledTableCell align="right">Edit_details</StyledTableCell>
            <StyledTableCell align="right">Excommunicado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTeachers.map((teacher) => (
            <StyledTableRow 
            key={teacher.id}
            onClick={() => navigate(`/teachers/${teacher.id}`)}
            style={{cursor: "pointer"}}
            >
              <StyledTableCell align="left">{teacher.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {teacher.name}
              </StyledTableCell>
              <StyledTableCell align="right">{teacher.specialisation}</StyledTableCell>
              <StyledTableCell align="right">{teacher.home_address}</StyledTableCell>
              <StyledTableCell align="right">{teacher.salary_receiving}</StyledTableCell>
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                onClick={() => navigate(`/teachers/${teacher.id}`)}
              >
                <Button 
                variant="outlined" 
                
                >
                  EDIT
                </Button>
              </Box>
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button 
                variant="contained" 
                color="error"
                onClick={() => {
                  deleteTeacher(teacher.id);
                }}
                >
                  Delete
                </Button>
              </Box>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default TeachersDetails