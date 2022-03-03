import { Nodes } from '~/models';

type Props = {
  products: Nodes;
};

export const WrapperProductCards = ({ products }: Props) => {
  /*  console.log('wrapper::', products); */

  const renderCards = () => {
    return (
      <div>
        {products.map(({ images }, index) => (
          <div key={index}>
            {images.map(({ src, alt }) => (
              <img src={src} alt={alt} key={src} />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return <div> {renderCards()}</div>;
};
