import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm, RootState } from '../state';

type PropsT = {};

const ItemSearch: React.FC<any> = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.items.searchTerm);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Items</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default ItemSearch;
