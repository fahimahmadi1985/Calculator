import React, { Component } from "react";
import Button from "./components/button";

export class App extends Component {
  state = {
    statement: [],
    result: ""
  };

  mainCont = {
    width: "40%",
    padding: "1px",
    marginTop: "10%",
    borderRadius: "10px",
    borderBottomLeftRadius: "3px",
    borderBottomRightRadius: "3px",
    paddingBottom: "5px"
  };

  btnCont = {
    width: "100%",
    padding: "0px",
    margin: "0px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  };

  //enter data into text field by typing
  handleChange = event => {
    this.setState({ statement: [...event.target.value] });
    /* const statementElement = event.target.value;
    const newStatement = [statementElement];
    this.setState({ statement: newStatement }); */
    this.forceUpdate();
  };

  //push mathematical statement into statement array
  createStatement = event => {
    const statementElement = event.target.id;
    const newStatement = [...this.state.statement, statementElement];
    this.setState({ statement: newStatement });
    this.forceUpdate();
  };

  //claculate the result
  calc = () => {
    const myStatement = this.state.statement.join("");
    // eslint-disable-next-line
    const result = eval(myStatement)
      .toString()
      .split("");
    this.setState({ result: result, statement: [...result] });
    console.log("calc");
    this.forceUpdate();
  };

  //calc from input text
  calcfromInput = event => {
    event.preventDefault();
    // eslint-disable-next-line
    const result = eval(this.state.statement.join(""));
    this.setState({ result: result, statement: [result] });
    console.log("calcfromInput");
    this.forceUpdate();
  };

  cleanup = () => {
    this.setState({ statement: [], result: "" });
  };

  clearOneDigit = () => {
    const newStatement = this.state.statement;
    newStatement.pop();
    this.setState({ statement: [...newStatement] });

    this.forceUpdate();
  };

  render() {
    return (
      <div style={this.mainCont} className="container bg-dark col-3">
        <form onSubmit={this.calcfromInput}>
          <input
            type="text"
            value={this.state.statement.join("")}
            onChange={this.handleChange}
            className="form-control bg-dark text-white border-0 pl-4"
            style={{
              fontSize: "150%",
              paddingTop: "40px",
              paddingBottom: "40px",
              marginTop: "20px",
              marginBottom: "20px"
            }}
          />
        </form>

        <div style={this.btnCont}>
          <Button
            ops={""}
            label={"AC"}
            createStatement={this.createStatement}
            clear={this.cleanup}
          />
          <Button
            ops={"<="}
            label="&larr;"
            clearOneDigit={this.clearOneDigit}
          />
          <Button
            ops={"%"}
            label={"%"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"/"}
            label={"/"}
            createStatement={this.createStatement}
            orange={"#e07a3a"}
          />

          <Button
            ops={"7"}
            label={"7"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"8"}
            label={"8"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"9"}
            label={"9"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"*"}
            label={"X"}
            createStatement={this.createStatement}
            orange={"#e07a3a"}
          />

          <Button
            ops={"4"}
            label={"4"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"5"}
            label={"5"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"6"}
            label={"6"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"-"}
            label={"-"}
            createStatement={this.createStatement}
            orange={"#e07a3a"}
          />

          <Button
            ops={"1"}
            label={"1"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"2"}
            label={"2"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"3"}
            label={"3"}
            createStatement={this.createStatement}
          />
          <Button
            ops={"+"}
            label={"+"}
            createStatement={this.createStatement}
            orange={"#e07a3a"}
          />

          <Button
            ops={"0"}
            label={"0"}
            createStatement={this.createStatement}
            width={"48.5%"}
          />
          <Button
            ops={"."}
            label={"."}
            createStatement={this.createStatement}
          />
          <Button
            ops={"="}
            label={"="}
            createStatement={this.createStatement}
            orange={"#e07a3a"}
            calc={this.calc}
          />
        </div>
      </div>
    );
  }
}

export default App;
