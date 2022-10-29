import { FilterWraper, FilterName, FilterField } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterWraper>
      <FilterName>Find contacts by name</FilterName>
      <FilterField onChange={onChange} value={value} />
    </FilterWraper>
  );
};
