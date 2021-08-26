import React, { useState } from 'react';
import { EditableTable } from '../components/Table/BankTable';


export default function App() {
  return (
    <div>
		<EditableTable />
    </div>

  )
}

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {};
  return { props: { headers } }
}