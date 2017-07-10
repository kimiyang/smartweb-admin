import React from 'react';
import { connect } from 'dva';
import FolioList from '../components/FolioList';

const Folios = ({ dispatch, folios }) => {
    function handleDelete(id) {
        dispatch({
            type: 'folios/delete',
            payload: id,
        });
    }
    return (
        <div>
            <h2>List of Folios</h2>
            <FolioList onDelete={handleDelete} folios={folios} />
        </div>
    );
};

export default connect(({ folios }) => ({ 
    folios
}))(Folios);