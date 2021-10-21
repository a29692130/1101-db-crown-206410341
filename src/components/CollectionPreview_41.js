import React, { useState } from 'react';
import './CollectionPreview_41.scss';
import items from './Collection-Item-data';
import CollectionItem_41 from './CollectionItem_41';

const CollectionPreview_41 = () => {
  const [collectionItems, setcollectionItems] = useState(items);
  return (
    <div>
      <div class='collection-preview'>
        <h2 class='title'>Womens</h2>
        <div class='preview'>
          {collectionItems.map((item) => {
            const { name, remoteUrl, price } = item;
            return (
              <CollectionItem_41
                name={name}
                remoteUrl={remoteUrl}
                price={price}
              />
            );
          })}
        </div>
      </div>
      <div class='collection-preview'>
        <h2 class='title'>Hats</h2>
        <div class='preview'>
          <CollectionItem_41
            name='Brown Brim'
            remoteUrl='https://i.ibb.co/ZYW3VTp/brown-brim.png'
            price='25'
          />
          <CollectionItem_41
            name='Blue Beanie'
            remoteUrl='https://i.ibb.co/ypkgK0X/blue-beanie.png'
            price='18'
          />
          <CollectionItem_41
            name='Brown Cowboy'
            remoteUrl='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
            price='35'
          />
          <CollectionItem_41
            name='Grey Brim'
            remoteUrl='https://i.ibb.co/RjBLWxB/grey-brim.png'
            price='25'
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview_41;
