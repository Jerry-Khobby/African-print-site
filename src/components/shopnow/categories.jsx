import React from 'react';
import { featuredProducts } from '@/data/categories';

const CategorySection = () => {
  // Group the items according to their groups
  const groupedProducts = featuredProducts.reduce((groups, product) => {
    const { group } = product;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(product);
    return groups;
  }, {});

  return (
    <div>
      {Object.entries(groupedProducts).map(([groupName, products]) => (
        <div key={groupName}>
          <h2>{groupName}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map(product => (
              <div key={product.id} style={{ margin: '10px', width: '200px' }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>Price: ${product.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
