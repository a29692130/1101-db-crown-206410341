import React from 'react';
import './Directory_41.scss';
import MenuItem_41 from './MenuItem_41';

const Directory_41 = () => {
  return(
    <div>
        <div className="directory-menu">
          <MenuItem_41 
          name='HATS'
          remoteUrl='https://i.ibb.co/cvpntL1/hats.png'
          size=''
          />
          <MenuItem_41 
          name='JACKETS'
          remoteUrl='https://i.ibb.co/px2tCc3/jackets.png'
          size=''
          />
          <MenuItem_41 
          name='SNEAKERS'
          remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png'
          size=''
          />
          <MenuItem_41 
          name='WOMENS'
          remoteUrl='https://i.ibb.co/GCCdy8t/womens.png'
          size='large'
          />
          <MenuItem_41 
          name='MENS'
          remoteUrl='https://i.ibb.co/R70vBrQ/men.png'
          size='large'
          />
        </div>        
    </div>
  );
};
export default Directory_41;