import React from "react";
import "./styles.scss";
import { generate } from "@ant-design/colors";
import Button from "./components/Button/Button";
import Palette from "./components/Palette/Palette";
import Switch from "./components/Switch/Switch";
import TextField from "./components/TextField/TextField";
import Alert from "./components/Alert/Alert";
import Checkbox from "./components/Checkbox/Checkbox";
import { BsPerson, BsPlus, BsFillInfoCircleFill, BsXCircleFill, BsQuestionCircleFill, BsFlagFill, BsClock } from "react-icons/bs"
import Radio from "./components/Radio/Radio";
import Card from "./components/Card/Card";
import Progress from "./components/Progress/Progress";

const baseColors = [
  {
    name: "Rose Red / Error, Danger",
    hex: "FF033E"
  },
  {
    name: "Gold",
    hex: "FFD700"
  },
  {
    name: "Violet",
    hex: "8F00FF"
  },
  {
    name: "Emerald Green / Success",
    hex: "50C878"
  },
  {
    name: "Bright Orange / Warning",
    hex: "FFA500"
  },
  {
    name: "Teal",
    hex: "30D5C8"
  },
  {
    name: "Royal Blue / Information",
    hex: "4169E1"
  }
];

const generatedColors = baseColors.map((hue) => {
  return {
    name: hue.name,
    colors: generate(hue.hex)
  };
});

export default function App() {

  const [progressValue, setProgressValue] = React.useState(2);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progressValue < 100) {
        setProgressValue(v => v + 1)
      } else setProgressValue(v => 0);
    }, 50);

    return () => clearInterval(timer);
  }, [progressValue]);

  return (
    <div className={"App"}>
      <h3>Button</h3>
      <div>outlined button</div>
      <Button prefixIcon={<BsPlus />} type={"outlined"} label={"Translate"} style={{ marginBottom: 20 }} />
      <div>secondary button</div>
      <Button prefixIcon={<BsPlus />} type={"secondary"} label={"Translate"} style={{ marginBottom: 20 }} />
      <div>primary button</div>
      <Button prefixIcon={<BsPlus />} type={"primary"} label={"Translate"} style={{ marginBottom: 20 }} />
      <div>block button (width === 100%)</div>
      <Button block suffixIcon={<BsPlus />} />
      <div>disabled button </div>
      <Button disabled label={"Disabled"} />
      <h3>Switch</h3>
      <Switch />
      <h3>TextField</h3>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <TextField />
        <TextField maxLength={24} style={{ marginLeft: 20 }} />
        <TextField style={{ marginLeft: 20 }} prefixIcon={<BsPerson />} />
        <TextField style={{ marginLeft: 20 }} processing prefixIcon={<BsPerson />} />
        <TextField style={{ marginLeft: 20 }} suffixIcon={<BsClock />} />
        <TextField style={{ marginLeft: 20 }} textArea maxLength={12} />
        <TextField style={{ marginLeft: 20 }} textArea maxLength={100} />
        <TextField style={{ marginLeft: 20 }} textArea placeholder={"Drag and drop a file here."} allowDrop />
      </div>
      <h3>Alert</h3>
      <Alert closable prefixIcon={<BsFillInfoCircleFill />} info={"New NMT model installed."} />
      <Alert closable prefixIcon={<BsXCircleFill />} info={"A fatal error."} status={"error"} />
      <Alert closable prefixIcon={<BsFlagFill />} info={"The task has been done."} status={"success"} />
      <Alert closable prefixIcon={<BsQuestionCircleFill />} info={"There's not enought disk space."} status={"warning"} />
      <h3>Checkbox</h3>
      <Checkbox id={"checkbox1"} label={"English"} />
      <Checkbox id={"checkbox2"} label={"Finnish"} />
      <Checkbox id={"checkbox3"} label={"German"} />
      <h3>Radio</h3>
      <Radio id={"radio1"} />
      <Radio id={"radio2"} />
      <Radio id={"radio3"} />
      <h3>Palette</h3>
      <Palette />
      <h3>Card</h3>
      <Card actions={[
        <Button />
      ]}>
      </Card>
      <Card style={{ marginLeft: 20 }} borderless actions={[
        <Button />
      ]}>
      </Card>
      <h3>Progress</h3>
      <Progress value={12} style={{ marginBottom: 20 }} />
      <Progress value={progressValue} label />
    </div >
  );
}
