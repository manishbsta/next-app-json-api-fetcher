import Link from 'next/link'

import Head from '../../components/MetaHead'

import styles from '../../styles/Followers.module.css'

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
			<h1 className="title" >Followers</h1>
			<div className={styles.followersContainer}>
				{followers.map(item => {
					return (
						<div
							key={item.id}
							className={styles.follower}>
							<Link href={`/followers/${item.id}`}>
								<a>
									<p>{item.id}. {item.name}</p>
								</a>
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}


export default Followers
