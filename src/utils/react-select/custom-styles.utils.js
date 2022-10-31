export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'white',
    background: state.isFocused ? 'black' : 'rgb(33, 33, 34)'
  }),
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "white" : "none",
    // background: 'rgb(33, 33, 34)',
    // color: 'white',

  }),
  menuList: (base) => ({
    ...base,
    background: 'rgb(33, 33, 34)',
  })
}