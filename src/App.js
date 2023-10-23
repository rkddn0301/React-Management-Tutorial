import "./App.css";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
// import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: "http://placehold.it/64x64",
    name: "강우석",
    birthday: "980301",
    gender: "남자",
    job: "회사원",
  },
  {
    id: 2,
    image: "http://placehold.it/64x64",
    name: "홍길동",
    birthday: "001211",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 3,
    image: "http://placehold.it/64x64",
    name: "순심이",
    birthday: "701231",
    gender: "여자",
    job: "디자이너",
  },
];

function App() {
  //const { classes } = this.props;
  return (
    <Paper sx={{ overflowX: "auto" }}>
      <Table stickyHeader sx={{ maxWidth: "1080px", minWidth: "1080px" }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
