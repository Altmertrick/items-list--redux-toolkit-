type PropsT = {};
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, RootState } from '../state';

const ItemList: React.FC<any> = () => {
  const dispatch = useDispatch();
  // const searchTerm = useSelector((state: RootState) => state.items.searchTerm);
  // const items = useSelector((state: RootState) =>
  //   state.items.itemsData.filter((item) => item.name.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase()))
  // );
  //
  //'items' here is a 'derived state' (based on itemsData and searchTerm)
  // to calculate piece of 'derived state' put calculating logic inside selector fn
  //As selector fn accepts state obj we can destructure state props that we need
  const items = useSelector(
    ({ items: { itemsData, searchTerm } }: RootState) => {
      return itemsData.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
    }
  );

  const handleDelete = (id: string) => {
    dispatch(removeItem(id));
  };

  const renderedItems = items.map((item) => {
    return (
      <div key={item.id} className="panel">
        <p>
          {item.name} - ${item.cost}{' '}
        </p>
        <button
          onClick={() => {
            handleDelete(item.id);
          }}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="items-list">
      {renderedItems}
      <hr />
    </div>
  );
};

export default ItemList;
