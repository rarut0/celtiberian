import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

const ArticleTable = () => {
  const articles = useSelector((state) => state.articles.items);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <a href={record.url}>{text}</a>,
    },
    {
      title: 'Snippet',
      dataIndex: 'snippet',
      key: 'snippet',
    },
  ];

  return <Table columns={columns} dataSource={articles} />;
};

export default ArticleTable;
