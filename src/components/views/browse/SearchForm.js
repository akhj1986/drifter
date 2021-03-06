import React from "react"
import { MyForm, MyButton, TextInput, SearchIcon } from "presentations"

export default ({
  name,
  value,
  onChange,
  onSubmit,
  placeholder,
  width,
  height,
  margin,
  background,
  searchButtonColor,
  searchIconColor
}) => {
  return (
    <MyForm
      onSubmit={onSubmit}
      row
      width={width}
      height={height}
      background={background ? background : "white"}
      margin={margin}
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
      <MyButton
        type="submit"
        width={height}
        height={height}
        background={searchButtonColor}
      >
        <SearchIcon size="25px" color={searchIconColor}></SearchIcon>
      </MyButton>
    </MyForm>
  )
}
