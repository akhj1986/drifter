import React from "react"
import { MyForm, MyButton, TextInput, SearchIcon } from "../../../presentations"

export default ({
  name,
  value,
  onChange,
  onSubmit,
  placeholder,
  width,
  height
}) => {
  return (
    <MyForm
      onSubmit={onSubmit}
      row
      width={width}
      height={height}
      background="white"
      margin="0 0 30px"
    >
      <TextInput
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        height="100%"
        width="100%"
        fontSize="20px"
      ></TextInput>
      <MyButton type="submit" width={height} height={height}>
        <SearchIcon size="25px"></SearchIcon>
      </MyButton>
    </MyForm>
  )
}
