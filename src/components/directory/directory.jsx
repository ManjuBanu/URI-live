import React from 'react';
import MenuItem from '../menu/menu-item';
import './directory.scss';
import {selectDirectorySections} from './../../redux/directory/selectors-directory';
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux';


 export const Directory = ({sections}) => (
        <div className="directory-menu">
        {sections.map(({id,...menuProps}) => (
            <MenuItem key={id} {...menuProps} />
        ))}
        </div>
    );


    const mapStateToProps =  createStructuredSelector({
      sections :selectDirectorySections,
    })


  export default connect(mapStateToProps)(Directory)
