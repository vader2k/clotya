import useFetch from '../hooks/useFetch';
import Card from '../ui/Card';

const List = ({ catId, maxValue, size }) => {
  
const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${size.map(
  (item)=> `&[filters][sizes][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxValue}`)

console.log(data)

  return (
    <div className='flex flex-wrap gap-12 '>
      {error 
        ? "something went wrong!" 
        : loading 
        ? "loading, please be patient" 
        : data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;