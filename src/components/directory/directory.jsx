import React from 'react';
import MenuItem from '../menu/menu-item';
import {selectDirectorySections} from './../../redux/directory/selectors-directory';
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux';

import {DirectoryMenuContainer} from './style-directory';



 export const Directory = ({sections}) => (
        <DirectoryMenuContainer>
        {sections.map(({id,...menuProps}) => (
            <MenuItem key={id} {...menuProps} />
        ))}
        </DirectoryMenuContainer>
    );


    const mapStateToProps =  createStructuredSelector({
      sections :selectDirectorySections,
    })


  export default connect(mapStateToProps)(Directory)
