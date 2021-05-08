import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<nav>
			<div className={styles.container}>
				<div>
					<Link href="/">
						<a>
							<Image src={"/logo.png"} width={250} height={250} />
						</a>
					</Link>
				</div>
				<div>
					<Link href="/"><a className={styles.navLinkItem}>Home</a></Link>
					<Link href="/about"><a className={styles.navLinkItem}>About</a></Link>
					<Link href="/subscribers"><a className={styles.navLinkItem}>Subscribers</a></Link>
				</div>
			</div>
			<div className={styles.divider} />
		</nav>
	)
}

export default Navbar
