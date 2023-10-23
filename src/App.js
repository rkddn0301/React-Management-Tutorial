import "./App.css";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";



function App() {

  state = {
    customers: ""
  }
  
  componentDidMount() { // callApi에서 가져온 데이터(body)를 state 변수에 삽입
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  
  callApi = async () => { // server.js에 넣어둔 json 데이터 가져오기
    const response = await fetch('/api/customers');
    const body = await response.json(); // response 변수를 json 형식으로 변환
    return body;
  
  }

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
          {this.state.customers ? this.state.customers.map((c) => {
            return (
              <Customer key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          }) : ""}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
