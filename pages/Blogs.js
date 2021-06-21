import React from 'react'
import Layout from './Component/Layout/layout'
import { useQuery } from 'react-query'

const Blogs = ({ data }) => { 
    return (
        <Layout>
            <div>
                blogs
            </div>
        </Layout>
    )   
}

export default Blogs

export async function getServerSideProps(context) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    debugger
    return {
      props: {
          data
      }, // will be passed to the page component as props
    }
}