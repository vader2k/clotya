import Card from '../ui/Card';
import { cardItems } from '../constants';

const List = ({ catId, maxValue, selectedSize }) => {
  return (
    <div className='flex flex-wrap gap-12 '>
      {/* {cardItems.map((item) => (
        <Card item={item} key={item.id} />
      ))} */}
    </div>
  );
};

export default List;