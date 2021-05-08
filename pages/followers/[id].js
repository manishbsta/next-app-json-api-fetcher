import styles from '../../styles/Followers.module.css'

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  const paths = data.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  const data = await response.json()

  return {
    props: {
      follower: data
    }
  }
}

const FollowerDetails = ({ follower }) => {
  return (
    <div>
      <h1 className="title">{follower.name}</h1>
      <div className={styles.detailContainer}>
        <p><span>Email:</span> {follower.email}</p>
        <p><span>Website:</span> {follower.website}</p>
        <p><span>Phone:</span> {follower.phone}</p>
        <p><span>Company:</span> {follower.company.name}</p>
        <p><span>City:</span> {follower.address.city}</p>
      </div>
    </div>
  )
}

export default FollowerDetails
