import React from 'react';
import './CollectionPreview_41.scss';
import CollectionItem_41 from './CollectionItem_41';

const CollectionPreview_41 = () => {
  return (
    <div>
      <div class="collection-preview">
        <h2 class="title">Womens</h2>
        <div class="preview">
          <CollectionItem_41
            name="Blue Tanktop"
            remoteUrl="https://i.ibb.co/7CQVJNm/blue-tank.png"
            price="25"
          />
          <CollectionItem_41
            name="Floral Blouse"
            remoteUrl="https://i.ibb.co/4W2DGKm/floral-blouse.png"
            price="20"
          />
          <CollectionItem_41
            name="Floral Dress"
            remoteUrl="https://i.ibb.co/KV18Ysr/floral-skirt.png"
            price="80"
          />
          <CollectionItem_41
            name="Red Dots Dress"
            remoteUrl="https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png"
            price="80"
          />
        </div>
      </div>
      <div class="collection-preview">
        <h2 class="title">Hats</h2>
        <div class="preview">
          <CollectionItem_41
            name="Brown Brim"
            remoteUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png"
            price="25"
          />
          <CollectionItem_41
            name="Blue Beanie"
            remoteUrl="https://i.ibb.co/ypkgK0X/blue-beanie.png"
            price="18"
          />
          <CollectionItem_41
            name="Brown Cowboy"
            remoteUrl="https://i.ibb.co/QdJwgmp/brown-cowboy.png"
            price="35"
          />
          <CollectionItem_41
            name="Grey Brim"
            remoteUrl="https://i.ibb.co/RjBLWxB/grey-brim.png"
            price="25"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview_41;
