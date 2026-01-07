
const userdetails = async({params} : {params :  Promise<{id : string}>})=> {

  const {id} = await params;  
  return (
    // <div>userdetails</div>
    <div>
      <h1>Showing Details of User</h1>
      <h2>User ID: {id}</h2>
    </div>
  )
}

export default userdetails