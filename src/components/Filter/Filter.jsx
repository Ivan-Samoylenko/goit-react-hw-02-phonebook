import {} from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={onChange} value={value} />
    </label>
  );
};
