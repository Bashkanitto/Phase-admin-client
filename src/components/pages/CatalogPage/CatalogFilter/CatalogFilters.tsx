import { BaseButton } from '../../../atoms/Button/BaseButton'
import styles from './CatalogFilters.module.scss'

const CatalogFilters = ({
	addCatalog,
	onFilterChange,
	filterPeriod,
	addProduct,
}: {
	addCatalog: () => void
	addProduct: () => void
	onFilterChange: (filter: string) => void
	filterPeriod: string | null
}) => {
	return (
		<div className={styles['catalog-header']}>
			<div className={styles['catalog-filter']}>
				<BaseButton
					onClick={() => onFilterChange('3_months')}
					variantColor={filterPeriod == '3_months' ? 'primary' : 'secondary'}
				>
					За 3 месяца
				</BaseButton>
				<BaseButton
					onClick={() => onFilterChange('6_months')}
					variantColor={filterPeriod == '6_months' ? 'primary' : 'secondary'}
				>
					За 6 месяцев
				</BaseButton>
				<BaseButton
					onClick={() => onFilterChange('1_year')}
					variantColor={filterPeriod == '1_year' ? 'primary' : 'secondary'}
				>
					За год
				</BaseButton>
			</div>
			<div className={styles['catalog-actions']}>
				<BaseButton onClick={addCatalog} variantColor='secondary'>
					Добавить каталог
				</BaseButton>
				<BaseButton onClick={addProduct} variantColor='primary'>
					Создать товар
				</BaseButton>
			</div>
		</div>
	)
}

export default CatalogFilters
