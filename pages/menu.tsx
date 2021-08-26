import React, { useState } from 'react';
import { MemberTable } from '../components/Table/MemberTable';


export default function App() {
  return (
    <div>
      <MemberTable />

    </div>

  )
}

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {};
  return { props: { headers } }
}