import Button from "./Button";

function App() {
  return (
    <div className="App">
      <div>
        <Button
          color={"light"}
          border={"light 5px"}
          bgColor={"light"}
          size={"small"}
        >
          one
        </Button>
        <Button
          color={"light"}
          border={"primary 5px"}
          bgColor={"primary"}
          size={"default"}
        >
          two
        </Button>
        <Button
          color={"dark"}
          border={"dark 5px"}
          bgColor={"dark"}
          size={"large"}
        >
          tree
        </Button>
        <Button
          color={"primary"}
          border={"dark 5px"}
          bgColor={"ufc"}
          size={"large"}
        >
          four
        </Button>
      </div>
    </div>
  );
}

export default App;
