import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const FolioList = ({onDelete, folios}) => {
    const columns = [{
        title: 'name',
        dataIndex: 'name',
    }, {
        title: 'Actions',
        render: (text, record) => {
            return (
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Button>Delete</Button>
                </Popconfirm>
            );
        },
    }];
    return (
        <Table
            dataSource={folios}
            columns={columns}
        />
    ); 
}

FolioList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  folios: PropTypes.array.isRequired,
};

export default FolioList;
