import React, { FC } from 'react';
import { ListItem } from 'react-native-elements';
import Colors from '../../Styles/Colors';

const ListItemComponent = ({ titleName, imageSource }) => {
  return (
    <>
      {imageSource === '' ? (
        <ListItem title={titleName} chevron={{ color: '#D8DADC' }} />
      ) : (
          <ListItem
            title={titleName}
            leftAvatar={{
              rounded: false,
              overlayContainerStyle: { backgroundColor: '#edeff0', borderRadius: 12 },
              source: imageSource,
              size: 30,
            }}
            chevron={{ color: '#D8DADC' }}
          />
        )}
    </>
  );
};
export default ListItemComponent;
