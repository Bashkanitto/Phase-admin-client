import { CalendarIcon } from '@heroicons/react/16/solid'
import { observer } from 'mobx-react-lite'
import notificationStore from '../../../store/NotificationStore'
import styles from './NotificationMenu.module.scss'

export const NotificationMenu = observer(() => {
	const { notifications, isMenuOpen, closeMenu } = notificationStore

	return (
		<div
			className={`${styles.notificationMenu} ${
				isMenuOpen ? styles.open : styles.closed
			}`}
		>
			<div className={styles.notificationHeader}>
				<h3>Уведомления</h3>
				<button className={styles.closeButton} onClick={closeMenu}>
					&times;
				</button>
			</div>
			<ul className={styles.item}>
				{notifications.map(notification => (
					<li key={notification.id}>
						<CalendarIcon />
						<div>
							<p className={styles[notification.type]}>{notification.title}</p>
							{notification.message}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
})