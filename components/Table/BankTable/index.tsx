import React, { useContext, useState, useEffect, useRef } from "react"
import { Table, Input, Button, Popconfirm, Form, Switch } from "antd"
import "./BankTable.less"
import {
     CaretRightOutlined,
     DeleteOutlined,
     PauseOutlined,
     PlayCircleOutlined,
} from "@ant-design/icons"
const EditableContext = React.createContext(null)

const EditableRow = ({ index, ...props }) => {
     const [form] = Form.useForm()
     return (
          <Form form={form} component={false}>
               <EditableContext.Provider value={form}>
                    <tr {...props} />
               </EditableContext.Provider>
          </Form>
     )
}

const EditableCell = ({
     title,
     editable,
     children,
     dataIndex,
     record,
     handleSave,
     ...restProps
}) => {
     const [editing, setEditing] = useState(false)
     const inputRef = useRef(null)
     const form = useContext(EditableContext)
     useEffect(() => {
          if (editing) {
               inputRef.current.focus()
          }
     }, [editing])

     const toggleEdit = () => {
          setEditing(!editing)
          form.setFieldsValue({
               [dataIndex]: record[dataIndex],
          })
     }

     const save = async () => {
          try {
               const values = await form.validateFields()
               toggleEdit()
               handleSave({ ...record, ...values })
          } catch (errInfo) {
               console.log("Save failed:", errInfo)
          }
     }

     let childNode = children

     if (editable) {
          childNode = editing ? (
               <Form.Item
                    style={{
                         margin: 0,
                    }}
                    name={dataIndex}
                    rules={[
                         {
                              required: true,
                              message: `${title} is required.`,
                         },
                    ]}
               >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
               </Form.Item>
          ) : (
               <div
                    className='editable-cell-value-wrap'
                    style={{
                         paddingRight: 24,
                    }}
                    onClick={toggleEdit}
               >
                    {children}
               </div>
          )
     }

     return <td {...restProps}>{childNode}</td>
}

export class EditableTable extends React.Component {
     columns: ({ title: string; dataIndex: string; width: string; render: (status: any) => JSX.Element; key?: undefined; editable?: undefined } | { title: string; dataIndex: string; key: string; render: (bankCode: string) => JSX.Element; width?: undefined; editable?: undefined } | { title: string; dataIndex: string; width: string; editable: boolean; render?: undefined; key?: undefined } | { title: string; dataIndex: string; editable: boolean; width?: undefined; render?: undefined; key?: undefined } | { title: string; dataIndex: string; width?: undefined; render?: undefined; key?: undefined; editable?: undefined } | { title: string; dataIndex: string; render: (_: any, record: any) => JSX.Element; width?: undefined; key?: undefined; editable?: undefined })[]
     constructor(props) {
          super(props)
          this.columns = [
               {
                    title: "Status",
                    dataIndex: "status",
                    width: "10%",
                    render: (status) => {
                         if (status == "true") {
                              return (
                                   <Button type='primary' ghost size={"small"}>
                                        START
                                   </Button>
                              )
                         }
                         if (status == "false") {
                              return (
                                   <Button danger size={"small"}>
                                        STOP
                                   </Button>
                              )
                         }
                    },
               },
               {
                    title: "System",
                    dataIndex: "age",
                    render: (text) => (
                         <Switch
                              checkedChildren='START'
                              unCheckedChildren={<PauseOutlined />}
                              onChange={this.handleSwitchChange}
                         />
                    ),
               },
               {
                    title: "ธนาคาร",
                    dataIndex: "bankCode",
                    key: "bankCode",

                    render: (bankCode: string) => {
                         if (bankCode == "GSB") {
                              return (
                                   <div className='tcenter'>
                                        <img
                                             src='https://sb.autoplay.cloud/assets/img/bank/GSB.svg'
                                             width='30'
                                        />
                                        <br />
                                        <a>ออมสิน</a>
                                        <a></a>
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
                                        <a>กสิกร</a>
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
                                        <a>กรุงเทพ</a>
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
                                        <a>กรุงไทย</a>
                                   </div>
                              )
                         }
                         if (bankCode == "SCB") {
                              return (
                                   <div className='tcenter'>
                                        <img
                                             src='https://sb.autoplay.cloud/assets/img/bank/SCB.svg'
                                             width='30'
                                        />
                                        <br />
                                        <a>ไทยพาณิชย์</a>
                                   </div>
                              )
                         }
                    },
               },
               {
                    title: "ชื่อ นามสกุล",
                    dataIndex: "name",
                    width: "15%",
                    editable: true,
               },
               {
                    title: "เลขบัญชี",
                    dataIndex: "bankNumber",
                    editable: true,
               },

               {
                    title: "เชื่อมต่อผ่าน",
                    dataIndex: "connectAPI",
               },
               {
                    title: "ใช้สำหรับ",
                    dataIndex: "typeUse",
               },
               {
                    title: "operation",
                    dataIndex: "operation",
                    render: (_, record) =>
                         this.state.dataSource.length >= 1 ? (
                              <Popconfirm
                                   title='Sure to delete?'
                                   onConfirm={() =>
                                        this.handleDelete(record.key)
                                   }
                              >
								    <Button type="primary"  icon={<DeleteOutlined />} size={"middle"} danger />
                                
                              </Popconfirm>
                         ) : null,
               },
          ]
          this.state = {
               dataSource: [
                    {
                         key: "0",
                         name: "Premwit ",
                         bankNumber: "1422488977",
                         connectAPI: "SCB API",
                         status: "true",
                         bankCode: "GSB",
                         typeUse: "NewDeposit",
                    },
                    {
                         key: "1",
                         name: "Premwit ",
                         bankNumber: "1422488977",
                         connectAPI: "SCB API",
                         status: "true",
                         bankCode: "GSB",
                         typeUse: "Deposit",
                    },
                    {
                         key: "1",
                         name: "Premwit ",
                         bankNumber: "1422488977",
                         connectAPI: "SCB API",
                         status: "true",
                         bankCode: "GSB",
                         typeUse: "VIPDeposit",
                    },
                    {
                         key: "2",
                         name: "Edward King 1",
                         bankNumber: "1422488977",
                         connectAPI: "SMS",
                         status: "false",
                         bankCode: "KBANK",
                         typeUse: "Withdraw",
                    },
                    {
                         key: "2",
                         name: "Edward King 1",
                         bankNumber: "1422488977",
                         connectAPI: "SMS",
                         status: "false",
                         bankCode: "KBANK",
                         typeUse: "VIPWithdraw",
                    },
                    {
                         key: "3",
                         name: "Edward King 1",
                         bankNumber: "32",
                         connectAPI: "Internet API",
                         status: "false",
                         bankCode: "SCB",
                         typeUse: "Marketing",
                    },
                    {
                         key: "3",
                         name: "Edward King 1",
                         bankNumber: "32",
                         connectAPI: "LINE API",
                         status: "false",
                         bankCode: "SCB",
                         typeUse: "Cost",
                    },
               ],
               count: 2,
          }
     }
     handleSwitchChange(checked) {
          console.log(`switch to -> ${checked}`)
     }

     handleDelete = (key: any) => {
          const dataSource = [...this.state.dataSource]
          this.setState({
               dataSource: dataSource.filter((item) => item.key !== key),
          })
     }
     handleAdd = () => {
          const { count, dataSource } = this.state
          const newData = {
               key: count,
               name: `Edward King ${count}`,
               bankNumber: "32",
               address: `London, Park Lane no. ${count}`,
          }
          this.setState({
               dataSource: [...dataSource, newData],
               count: count + 1,
          })
     }
     handleSave = (row) => {
          const newData = [...this.state.dataSource]
          const index = newData.findIndex((item) => row.key === item.key)
          const item = newData[index]
          newData.splice(index, 1, { ...item, ...row })
          this.setState({
               dataSource: newData,
          })
     }

     render() {
          const { dataSource } = this.state
          const components = {
               body: {
                    row: EditableRow,
                    cell: EditableCell,
               },
          }
          const columns = this.columns.map((col) => {
               if (!col.editable) {
                    return col
               }

               return {
                    ...col,
                    onCell: (record) => ({
                         record,
                         editable: col.editable,
                         dataIndex: col.dataIndex,
                         title: col.title,
                         handleSave: this.handleSave,
                    }),
               }
          })
          return (
               <div>
                    <Button
                         onClick={this.handleAdd}
                         type='primary'
                         style={{
                              marginBottom: 16,
                         }}
                    >
                         เพิ่มธนาคาร
                    </Button>
                    <Table
                         components={components}
                         rowClassName={() => "editable-row"}
                         bordered
                         dataSource={dataSource}
                         columns={columns}
                    />
               </div>
          )
     }
}
