import { Table, Input, Button, Space, Tooltip, Typography } from "antd"
import Highlighter from "react-highlight-words"
import {
     FormOutlined,
     HistoryOutlined,
     KeyOutlined,
     RedoOutlined,
     SearchOutlined,
} from "@ant-design/icons"
import { EditOutlined } from "@ant-design/icons"
import React from "react"
import "./MemberTable.less"
const { Text, Link } = Typography
const data = [
     {
          key: "1",
          name: "นภาภรณ์ หนไธสง",
          username: "MJ1OCVDJGL",
          tel: "0617894561",
          ref: "FREND",
          refBy: "MJ1032951",
          dateStart: "19/07/2021",
          createBy: "admin",
          bankCode: "KBANK",
          bankNumber: "3340396736",
     },
     {
          key: "2",
          name: "Joe Black",
          username: "MJ1075807",
          tel: "0957894162",
          ref: "FREND",
          refBy: "MJ1331243",
          dateStart: "19/07/2021",
          createBy: "admin",
          bankCode: "GSB",
          bankNumber: "123456789",
     },
     {
          key: "3",
          name: "Jim Green",
          username: "MJ2718698",
          tel: "099887878",
          ref: "FREND",
          refBy: "MJ0964412",
          dateStart: "19/07/2021",
          createBy: "admin",
          bankCode: "BBL",
          bankNumber: "123456789",
     },
     {
          key: "4",
          name: "Jim Red",
          username: "MJ5246875",
          tel: "0617565461",
          ref: "FREND",
          refBy: "MJ1331243",
          dateStart: "19/07/2021",
          createBy: "admin",
          bankCode: "KTB",
          bankNumber: "123456789",
     },
]

export class MemberTable extends React.Component {
     state = {
          searchText: "",
          searchedColumn: "",
     }

     getColumnSearchProps = (dataIndex) => ({
          filterDropdown: ({
               setSelectedKeys,
               selectedKeys,
               confirm,
               clearFilters,
          }) => (
               <div style={{ padding: 8 }}>
                    <Input
                         ref={(node) => {
                              this.searchInput = node
                         }}
                         placeholder={`Search ${dataIndex}`}
                         value={selectedKeys[0]}
                         onChange={(e) =>
                              setSelectedKeys(
                                   e.target.value ? [e.target.value] : []
                              )
                         }
                         onPressEnter={() =>
                              this.handleSearch(
                                   selectedKeys,
                                   confirm,
                                   dataIndex
                              )
                         }
                         style={{ marginBottom: 8, display: "block" }}
                    />
                    <Space>
                         <Button
                              type='primary'
                              onClick={() =>
                                   this.handleSearch(
                                        selectedKeys,
                                        confirm,
                                        dataIndex
                                   )
                              }
                              icon={<SearchOutlined />}
                              size='small'
                              style={{ width: 90 }}
                         >
                              Search
                         </Button>
                         <Button
                              onClick={() => this.handleReset(clearFilters)}
                              size='small'
                              style={{ width: 90 }}
                         >
                              Reset
                         </Button>
                         <Button
                              type='link'
                              size='small'
                              onClick={() => {
                                   confirm({ closeDropdown: false })
                                   this.setState({
                                        searchText: selectedKeys[0],
                                        searchedColumn: dataIndex,
                                   })
                              }}
                         >
                              Filter
                         </Button>
                    </Space>
               </div>
          ),
          filterIcon: (filtered) => (
               <SearchOutlined
                    style={{ color: filtered ? "#1890ff" : undefined }}
               />
          ),
          onFilter: (value, record) =>
               record[dataIndex]
                    ? record[dataIndex]
                           .toString()
                           .toLowerCase()
                           .includes(value.toLowerCase())
                    : "",
          onFilterDropdownVisibleChange: (visible) => {
               if (visible) {
                    setTimeout(() => this.searchInput.select(), 100)
               }
          },
          render: (text) =>
               this.state.searchedColumn === dataIndex ? (
                    <Highlighter
                         highlightStyle={{
                              backgroundColor: "#ffc069",
                              padding: 0,
                         }}
                         searchWords={[this.state.searchText]}
                         autoEscape
                         textToHighlight={text ? text.toString() : ""}
                    />
               ) : (
                    text
               ),
     })

     handleSearch = (selectedKeys, confirm, dataIndex) => {
          confirm()
          this.setState({
               searchText: selectedKeys[0],
               searchedColumn: dataIndex,
          })
     }

     handleReset = (clearFilters) => {
          clearFilters()
          this.setState({ searchText: "" })
     }
     searchInput: Input

     render() {
          const columns = [
               {
                    title: "ลำดับ",
                    dataIndex: "key",
                    key: "name",
                    width: "2%",

                    sorter: (a, b) => a.key - b.key,
                    sortDirections: ["descend", "ascend"],
               },
               {
                    title: "Bank",
                    dataIndex: "bankCode",
                    key: "bankCode",
                    width: "8%",
                    render: (bankCode: string, x) => {
                         if (bankCode == "GSB") {
                              return (
                                   <div className='tcenter'>
                                        <img
                                             src='https://sb.autoplay.cloud/assets/img/bank/GSB.svg'
                                             width='30'
                                        />
                                        <br />
                                        <Text>{x.name}</Text> <br />
                                        <Text type='danger'>
                                             {x.bankNumber}
                                        </Text>
                                   </div>
                              )
                         }
                         if (bankCode == "KBANK") {
                              return (
                                   <div className='tcenter'>
                                        <img
                                             src='https://sb.autoplay.cloud/assets/img/bank/KBANK.svg'
                                             width='30'
                                        />
                                        <br />
                                        <Text>{x.name}</Text> <br />
                                        <Text type='danger'>
                                             {x.bankNumber}
                                        </Text>
                                   </div>
                              )
                         }
                         if (bankCode == "BBL") {
                              return (
                                   <div className='tcenter'>
                                        <img
                                             src='https://sb.autoplay.cloud/assets/img/bank/BBL.svg'
                                             width='30'
                                        />
                                        <br />
                                        <Text>{x.name}</Text> <br />
                                        <Text type='danger'>
                                             {x.bankNumber}
                                        </Text>
                                   </div>
                              )
                         }
                         if (bankCode == "KTB") {
                              return (
                                   <div className='tcenter'>
                                        <img
                                             src='https://sb.autoplay.cloud/assets/img/bank/KTB.svg'
                                             width='30'
                                        />
                                        <br />
                                        <Text>{x.name}</Text> <br />
                                        <Text type='danger'>
                                             {x.bankNumber}
                                        </Text>
                                   </div>
                              )
                         }
                    },
               },
               {
                    title: "ชื่อ-นามสกุล",
                    dataIndex: "name",
                    key: "name",
                    width: "150px",
                    ...this.getColumnSearchProps("name"),
               },
               {
                    title: "Username",
                    dataIndex: "username",
                    key: "username",
                    width: "10%",
                    ...this.getColumnSearchProps("username"),
                    sorter: (a, b) => a.username.length - b.username.length,
                    sortDirections: ["descend", "ascend"],
                    render: (text, x) => (
                         <div>
                              <a className='link-black'>{x.username}</a> <br />
                              <a>{x.tel}</a>
                         </div>
                    ),
               },
               {
                    title: "วันที่",
                    dataIndex: "dateStart",
                    key: "dateStart",
                    width: "200px",
                    ...this.getColumnSearchProps("dateStart"),
                    sorter: (a, b) => a.dateStart.length - b.dateStart.length,
                    sortDirections: ["descend", "ascend"],
                    render: (text, x) => (
                         <div>
                              <a className='link-black'>
                                   create: {x.dateStart}
                              </a>{" "}
                              <br />
                              <Link href='#'>update: {x.dateStart}</Link>
                         </div>
                    ),
               },
               {
                    title: "มาจาก",
                    width: "90px",
                    dataIndex: "ref",
                    key: "ref",
               },
               {
                    title: "ผู้แนะนำ",
                    width: "90px",
                    dataIndex: "refBy",
                    key: "refBy",
               },
               {
                    title: "ทำโดย",
                    dataIndex: "createBy",
                    key: "createBy",
                    width: "140px",
                    ...this.getColumnSearchProps("createBy"),
                    sorter: (a, b) => a.createBy.length - b.createBy.length,
                    sortDirections: ["descend", "ascend"],
               },

               {
                    title: "Action",
                    dataIndex: "",
                    key: "x",
                    render: () => (
                         <Space>
                              <Tooltip title='ประวัติ ฝาก-ถอน' color={"cyan"}>
                                   <Button
                                        type='primary'
                                        icon={<HistoryOutlined />}
                                        size={"large"}
                                   />
                              </Tooltip>
                              <Tooltip title='เปลี่ยนรหัสผ่าน' color={"orange"}>
                                   <Button
                                        type='primary'
                                        icon={<KeyOutlined />}
                                        size={"large"}
                                   />
                              </Tooltip>
                              <Tooltip title='รีเซตเทิร์น' color={"volcano"}>
                                   <Button
                                        type='primary'
                                        icon={<RedoOutlined />}
                                        size={"large"}
                                   />
                              </Tooltip>
                              <Tooltip title='แก้ไข' color={"lime"}>
                                   <Button
                                        type='primary'
                                        icon={<EditOutlined />}
                                        size={"large"}
                                   />
                              </Tooltip>
                         </Space>
                    ),
               },
          ]
          return (
               <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
          )
     }
}
