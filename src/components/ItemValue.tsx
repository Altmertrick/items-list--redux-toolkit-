type PropsT = {};
import { useSelector } from 'react-redux';
import { RootState } from '../state';

const ItemValue: React.FC<any> = () => {
  const itemsTotalCost = useSelector(
    ({ items: { itemsData, searchTerm } }: RootState) => {
      return itemsData
        .filter((item) =>
          item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        .reduce((acc, item) => acc + item.cost, 0);
    }
  );

  return <div className="items-value">Total cost ${itemsTotalCost}</div>;
};

export default ItemValue;
