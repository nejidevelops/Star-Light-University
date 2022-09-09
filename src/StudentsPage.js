import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import { useEffect, useState, React } from 'react';

const StudentsPage = () => {
  const [students, setAllStudents] = useState([]);

  const url = '/students'

  //custom hook
  // function useFetchStudents()

    //CRUD-GET
    const getData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setAllStudents(data)
        });
    };
    useEffect(() => {
      getData()
    }, []);

  //DELETE

  function deleteStudent(id){
    fetch(`/students/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const filterCourse = students.filter((student) => student.id !== id)
            setAllStudents(filterCourse)
        })
  }

  //POST


  //Styling..
  const tableStyle = {
    width: "80%",
    margin: "20px 10%"
  }



  return (
    <div>
    <Table style={tableStyle}>
      <TableHead>
        <TableRow style={{ fontSize: "18px" }}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Course-ID</TableCell>
          <TableCell>Teacher-ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.course_id}</TableCell>
            <TableCell>{student.teacher_id}</TableCell>
            <TableCell>
            <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => {
                  deleteStudent(student.id)
                }
                }
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => {
                  deleteStudent(student.id)
                }
                }
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
  }

export default StudentsPage
