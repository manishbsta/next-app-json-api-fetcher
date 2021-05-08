import Head from '../../components/MetaHead'

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: {
            followers: data
        }
    }
}

const Followers = ({ followers }) => {
    return (
        <div>
            <Head title="Followers" />
            <h1 className="title" >Subscribers</h1>

            {followers.map(item => {
              return (
                  <div key={item.id}>
                      <a className="">{item.name}</a>
                  </div>
              )  
            })}
        </div>
    )
}


export default Followers
