import { Table, Input, Button, Space, Tooltip, Typography, Badge } from "antd"
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

const { Text, Link } = Typography
const data = [
     {
          key: "1",
          StamentType: "Deposit",
          Credit: "100",
          Bonus: "1",
          remarks: null,
          name: "นภาภรณ์ หนไธสง",
          username: "MJ1OCVDJGL",
          tel: "0617894561",
          ref: "FREND",
          refBy: "MJ1032951",
          dateStart: "19/07/2021 21:49:08",
          dateUpdate: "19/07/2021 21:49:56",
          createBy: "admin",
          bankCode: "KBANK",
          bankNumber: "3340396736",
          refCredit: {
               id: "PWQ162608309096349067",
               creditBefor: "0",
               creditAfter: "100",
          },
          refBank: {
               id: "Deposit - x6736",
               balanceBefor: "5000",
               balanceAfter: "5100",
          },
          status: "success"
     },
     {
          key: "2",
          StamentType: "Withdraw",
          Credit: "-100",
          Bonus: "0",
          remarks: null,
          name: "นภาภรณ์ หนไธสง",
          username: "MJ1OCVDJGL",
          tel: "0617894561",
          ref: "FREND",
          refBy: "MJ1032951",
          dateStart: "19/07/2021 21:49:08",
          dateUpdate: "19/07/2021 21:49:56",
          createBy: "admin",
          bankCode: "KBANK",
          bankNumber: "3340396736",
          refCredit: {
               id: "PWQ162608309096349067",
               creditBefor: "100",
               creditAfter: "0",
          },
          refBank: {
               id: "Deposit - x6736",
               balanceBefor: "5100",
               balanceAfter: "5000",
          },
          status: "success"
     },
     {
          key: "3",
          StamentType: "Bonus",
          Credit: "0",
          Bonus: "100",
          remarks: "ตืนยอดเสีย",
          name: "นภาภรณ์ หนไธสง",
          username: "MJ1OCVDJGL",
          tel: "0617894561",
          ref: "FREND",
          refBy: "MJ1032951",
          dateStart: "19/07/2021 21:49:08",
          dateUpdate: "19/07/2021 21:49:56",
          createBy: "admin",
          bankCode: "KBANK",
          bankNumber: "3340396736",
          refCredit: {
               id: "PWQ162608309096349067",
               creditBefor: "0",
               creditAfter: "100",
          },
          refBank: {
               id: "",
               balanceBefor: "",
               balanceAfter: "",
          },
          status: "success"
     },
     {
          key: "4",
          StamentType: "Bonus",
          Credit: "0",
          Bonus: "10",
          remarks: "แนะนำเพื่อน",
          name: "นภาภรณ์ หนไธสง",
          username: "MJ1OCVDJGL",
          tel: "0617894561",
          ref: "FREND",
          refBy: "MJ1032951",
          dateStart: "19/07/2021 21:49:08",
          dateUpdate: "19/07/2021 21:49:56",
          createBy: "admin",
          bankCode: "KBANK",
          bankNumber: "3340396736",
          refCredit: {
               id: "PWQ162608309096349067",
               creditBefor: "0",
               creditAfter: "100",
          },
          refBank: {
               id: "",
               balanceBefor: "",
               balanceAfter: "",
          },
          status: "success"
     },
     {
          key: "5",
          StamentType: "Deposit",
          Credit: "1000",
          Bonus: "10",
          remarks: "ฝากแรกของวัน",
          name: "นภาภรณ์ หนไธสง",
          username: "MJ1OCVDJGL",
          tel: "0617894561",
          ref: "FREND",
          refBy: "MJ1032951",
          dateStart: "19/07/2021 21:49:08",
          dateUpdate: "19/07/2021 21:49:56",
          createBy: "admin",
          bankCode: "KBANK",
          bankNumber: "3340396736",
          refCredit: {
               id: "PWQ162608309094449067",
               creditBefor: "10",
               creditAfter: "1020",
          },
          refBank: {
               id: "",
               balanceBefor: "",
               balanceAfter: "",
          },
          status: "padding"
     },
]

export class CreditTableHome extends React.Component {
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
                    title: "รายการ",
                    dataIndex: "StamentType",
                    key: "StamentType",
                    width: "10%",
                    ...this.getColumnSearchProps("StamentType"),
                    sorter: (a, b) =>
                         a.StamentType.length - b.StamentType.length,
                    sortDirections: ["descend", "ascend"],
                    render: (text, x) => (
                         <div>
                              <Badge
                                   style={
                                        x.StamentType == "Withdraw"
                                             ? { backgroundColor: "#ff0000" }
                                             : x.StamentType == "Deposit"
                                             ? { backgroundColor: "#1eff00" }
                                             : { backgroundColor: "#ffe100" }
                                   }
                                   overflowCount={10000000}
                                   count={x.StamentType}
                              />{" "}
                              <br />
                              <Text className='link-black'>
                                   {x.username}
                              </Text>{" "}
                              <br />
                              <Text>{x.tel}</Text>
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
                    render: (text, x) => {
                         let id = x?.refCredit?.id

                         return (
                              <div>
                                   {" "}
                                   <a>
                                        <Badge
                                             style={
                                                  x.StamentType == "Withdraw"
                                                       ? {
                                                              backgroundColor:
                                                                   "#ff0000",
                                                         }
                                                       : x.StamentType ==
                                                         "Deposit"
                                                       ? {
                                                              backgroundColor:
                                                                   "#1eff00",
                                                         }
                                                       : {
                                                              backgroundColor:
                                                                   "#ffe100",
                                                         }
                                             }
                                             overflowCount={10000000}
                                             count={id}
                                        />
                                   </a>{" "}
                                   <br />
                                   <Text className='link-black'>
                                        create: {x.dateStart}
                                   </Text>{" "}
                                   <br />
                                   <Text>update: {x.dateUpdate}</Text>
                              </div>
                         )
                    },
               },
               {
                    title: "โบนัส",
                    width: "90px",
                    dataIndex: "Bonus",
                    key: "Bonus",
                    render: (text, x) =>
                         x.remarks != null ? (
                              <div>
                                   <Badge
                                        style={
                                             x.StamentType == "Withdraw"
                                                  ? {
                                                         backgroundColor:
                                                              "#ff0000",
                                                    }
                                                  : x.StamentType == "Deposit"
                                                  ? {
                                                         backgroundColor:
                                                              "#1eff00",
                                                    }
                                                  : {
                                                         backgroundColor:
                                                              "#ffe100",
                                                    }
                                        }
                                        overflowCount={10000000}
                                        count={x.remarks}
                                   />{" "}
                                   <br />
                                   <Text className='link-black'>
                                        Bonus:{x.Bonus}
                                   </Text>{" "}
                                   <br />
                                   <Text>_</Text>
                              </div>
                         ) : null,
               },
               {
                    title: "เครดิต",
                    width: "90px",
                    dataIndex: "Credit",
                    key: "Credit",
                    render: (Credit, x) => (
                         <div>
                              <Badge
                                   style={
                                        x.StamentType == "Withdraw"
                                             ? {
                                                    backgroundColor: "#ff0000",
                                               }
                                             : x.StamentType == "Deposit"
                                             ? {
                                                    backgroundColor: "#1eff00",
                                               }
                                             : {
                                                    backgroundColor: "#ffe100",
                                               }
                                   }
                                   overflowCount={10000000}
                                   count={Credit}
                              />{" "}
                              <br />
                              <Text className='link-black'>
                                   Befor:{x.refCredit?.creditBefor}
                              </Text>{" "}
                              <br />
                              <Text className='link-black'>
                                   After:{x.refCredit?.creditAfter}
                              </Text>
                         </div>
                    ),
               },

               {
                    title: "ธนาคาร",
                    width: "200px",
                    dataIndex: "bankCode",
                    key: "bankCode",
                    render: (text, x) => {
                         const a = ""
                         return x.remarks == null ? (
                              <div>
                                   <Badge
                                        style={
                                             x.StamentType == "Withdraw"
                                                  ? {
                                                         backgroundColor:
                                                              "#ff0000",
                                                    }
                                                  : x.StamentType == "Deposit"
                                                  ? {
                                                         backgroundColor:
                                                              "#1eff00",
                                                    }
                                                  : {
                                                         backgroundColor:
                                                              "#ffe100",
                                                    }
                                        }
                                        overflowCount={10000000}
                                        count={`${x.refBank.id}`}
                                   />
                                   <br />
                                   <Text className='link-black'>
                                        Befor:{x.refBank.balanceBefor}
                                   </Text>{" "}
                                   <br />
                                   <Text className='link-black'>
                                        After:{x.refBank.balanceAfter}
                                   </Text>
                              </div>
                         ) : (<div>
                              <h2>DEF : {x.Credit}</h2>
                         </div>)
                    },
               },
               {
                    title: "สถานะ",
                    dataIndex: "status",
                    key: "status",
                    width: "140px",
                    ...this.getColumnSearchProps("status"),
                    sorter: (a, b) => a.status > b.status,
                    sortDirections: ["descend", "ascend"],
                    render: (status, x) => (
                         <div>
                              <Badge
                              style={
                                   status == "fail"
                                        ? { backgroundColor: "#ff0000" }
                                        : status == "success"
                                        ? { backgroundColor: "#1eff00" }
                                        : { backgroundColor: "#ffe100" }
                              }
                                   overflowCount={10000000}
                                   count={status}
                              />
                         </div>
                    ),
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
          ]
          return (
               <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
          )
     }
}
