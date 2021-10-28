import React, { useState } from 'react';
import './CollectionPreview_41.scss';
import womans_items from './woman-items-data';
import hats_items from './hat-items-data';
import CollectionItem_41 from './CollectionItem_41';

const CollectionPreview_41 = () => {
  const [womansItems, setwomansItems] = useState(womans_items);
  const [hatsItems, sethatsItems] = useState(hats_items);
  return (
    <div>
      <div className="collection-preview">
        <h2 className="title">Womans</h2>
        <div className="preview">
          {womansItems.map((item) => {
            const { id, name, remoteUrl, price } = item;
            return (
              <CollectionItem_41
                id={id}
                name={name}
                remoteUrl={remoteUrl}
                price={price}
              />
            );
          })}
        </div>
        <h2 className="title">Hats</h2>
        <div className="preview">
          {hatsItems.map((item) => {
            const { id, name, remoteUrl, price } = item;
            return (
              <CollectionItem_41
                id={id}
                name={name}
                remoteUrl={remoteUrl}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview_41;
