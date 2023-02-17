import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, changeCost, changeName, RootState } from '../state';

type PropsT = {};

const ItemForm: React.FC<any> = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.form.name);
  const cost = useSelector((state: RootState) => state.form.cost);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCost(Number(e.target.value)));
  };

  const handleAddItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addItem({ name, cost }));
  };

  return (
    <div className="panel item-form">
      <h4 className="subtitle is-3">Add Item</h4>
      <form onSubmit={handleAddItem}>
        <div className="field-group">
          <div className="field">
            <label className="label">Item Name</label>
            <input
              value={name}
              onChange={handleNameChange}
              className="input is-expanded"
            />
          </div>
          <div className="field">
            <label className="label">Item Cost</label>
            <input
              value={cost}
              onChange={handleCostChange}
              type="number"
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Create</button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
