import React from 'react';
import { Table, Tag, Pagination } from '@alifd/next';
import moment from 'moment';

const generateData = () => {
	const result: any = [];
	const languages = ['Java', 'C++', 'Python', 'JavaScript'];
	
	for (let i = 0; i < 10; i++) {
		const shuffled = [...languages].sort(() => 0.5 - Math.random());
		const selectedLanguages = shuffled.slice(0, 2);
		
		result.push({
			id: 100306660940 + i,
			name: `张三${i}`,
			age: 20 + i,
			gender: i % 2 === 0 ? '男' : '女',
			marriage: i % 2 === 0 ? '已婚' : '未婚',
			code: Math.floor(Math.random() * 5) + 1,
			language: selectedLanguages,
			education: ['高中', '本科', '硕士', '博士'][i % 4],
			graduationDate: moment(new Date().getTime() - 365*24*60*60*1000 * (i+3)).format('YYYY-MM-DD'),
			desc: `这是一段个人简介${i}`,
		});
	}
	return result;
};

const TableCom = () => {
	const [dataSource, setDataSource] = React.useState(generateData());
	const [currentPage, setCurrentPage] = React.useState(1);
	const pageSize = 5;


	const onPageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const visibleData = dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	return (
		<div>
			<Table dataSource={visibleData}>
				<Table.Column title="姓名" dataIndex="name" width={100} />
				<Table.Column title="年龄" dataIndex="age" width={80} />
				<Table.Column title="婚姻状况" dataIndex="marriage" width={80} />
				<Table.Column title="代码能力" dataIndex="code" width={80} />
				<Table.Column title="编程语言" dataIndex="language" width={100} cell={(languages) => {
					return (
						<div>
							{
								languages.map(item => {
									return <Tag key={item} style={{marginRight: 10}}>{item}</Tag>;
								})
							}
						</div>
					);
				}}/>
				<Table.Column title="学历" dataIndex="education" width={100} />
				<Table.Column title="毕业时间" dataIndex="graduationDate" width={120} />
				<Table.Column title="个人简介" dataIndex="desc" width={100} />
			</Table>
			<Pagination
				className="pagination"
				current={currentPage}
				onChange={onPageChange}
				total={dataSource.length}
				pageSize={pageSize}
				style={{ marginTop: '16px', textAlign: 'right' }}
			/>
		</div>
	);
};

export default TableCom;
