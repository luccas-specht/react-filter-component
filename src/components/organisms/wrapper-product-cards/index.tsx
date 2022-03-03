import { Categories, Nodes } from '~/models';

type Props = {
  products: Nodes;
};

export const WrapperProductCards = ({ products }: Props) => {
  const renderCards = () => {
    return (
      <div>
        {products.map((_, index) => (
          <div key={index}>{index}</div>
        ))}
      </div>
    );
  };

  return <div> {renderCards()}</div>;
};
