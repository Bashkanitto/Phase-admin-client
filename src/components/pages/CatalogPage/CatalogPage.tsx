import { useState } from 'react'
import Tender from '../../molecules/Tender/Tender'
import AddCatalogModal from './AddCatalogModal/AddCatalogModal'
import CatalogFilters from './CatalogFilter/CatalogFilters'
import styles from './CatalogPage.module.scss'
import CatalogSwitch from './CatalogSwitch/CatalogSwitch'

const CatalogPage = () => {
	const userData = [
		{
			id: 0,
			title: 'БФГ',
			name: 'Самса сенсей',
			rang: 96,
			rangCount: 12,
			winned: '95/106',
			sold: 1007,
			tenders: [
				{
					id: 0,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 1,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 2,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 3,
					title: 'БФГ',
					image: '/',
				},
			],
		},
		{
			id: 2,
			title: 'БФГ',
			name: 'Самса сенсей',
			rang: 96,
			rangCount: 12,
			winned: '95/106',
			sold: 1007,
			tenders: [
				{
					id: 0,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 1,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 2,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 3,
					title: 'БФГ',
					image: '/',
				},
			],
		},
		{
			id: 3,
			title: 'БФГ',
			name: 'Самса сенсей',
			rang: 96,
			rangCount: 12,
			winned: '95/106',
			sold: 1007,
			tenders: [
				{
					id: 0,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 1,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 2,
					title: 'БФГ',
					image: '/',
				},
				{
					id: 3,
					title: 'БФГ',
					image: '/',
				},
			],
		},
	]
	const [isAddCatalogOpen, setIsAddCatalogOpen] = useState<boolean>()

	function addCatalog() {
		setIsAddCatalogOpen(true)
	}

	return (
		<div className={styles['catalog-page']}>
			<CatalogSwitch />
			<p className={styles['catalog-title']}>Каталог</p>
			<p className={styles['catalog-description']}>Топ - 50</p>
			<CatalogFilters addCatalog={addCatalog} />
			<div className={styles['catalog-tenders']}>
				{userData.map(user => (
					<Tender
						key={user.id}
						id={user.id}
						name={user.name}
						rang={user.rang}
						winned={user.winned}
						title={user.title}
						sold={user.sold}
						tenders={user.tenders}
					/>
				))}
			</div>
			{isAddCatalogOpen && (
				<AddCatalogModal
					isOpen={isAddCatalogOpen}
					onClose={() => setIsAddCatalogOpen(false)}
				/>
			)}
		</div>
	)
}

export default CatalogPage