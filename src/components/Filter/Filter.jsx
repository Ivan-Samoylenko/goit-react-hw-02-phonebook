import {} from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts be name
      <input onChange={onChange} />
    </label>
  );
};
