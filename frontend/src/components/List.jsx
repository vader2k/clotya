import Card from '../ui/Card';
import { cardItems } from '../constants';

const List = ({ catId, maxValue, SubCats }) => {
  return (
    <div>
      {cardItems.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;