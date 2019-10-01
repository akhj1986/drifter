import React from "react"
import { MyForm, MyButton, TextInput, SearchIcon } from "../../../presentations"

export default ({
  name,
  value,
  onChange,
  onSubmit,
  placeholder,
  handleClick
}) => {
  return (
    <MyForm
      onSubmit={onSubmit}
      row
      width="auto"
      height="31px"
      background="white"
    >
      <TextInput
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        height="30px"
        width="100%"
        fontSize="20px"
      ></TextInput>
      <MyButton type="submit" width="60px" height="30px">
        <SearchIcon size="25px"></SearchIcon>
      </MyButton>
    </MyForm>
  )
}
