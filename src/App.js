import "./App.css";
import Customer from "./components/Customer";

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
  return (
    <div>
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
    </div>
  );
}

export default App;
