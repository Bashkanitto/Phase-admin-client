import { Input } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { BaseButton } from '../../atoms/Button/BaseButton'
import styles from './AuthPage.module.scss'

const AuthPAge = () => {
	const navigate = useNavigate()

	function handleSubmit(event) {
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value

		if (email == 'admin' && password == 'admin') {
			navigate('/manager')
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.formWrapper}>
				<form onSubmit={e => handleSubmit(e)}>
					<h4>Авторизация</h4>
					<p>Введите ваш номер телефона для входа в личный кабинет.</p>
					<Input
						className={styles['inputs']}
						name='email'
						placeholder='Ваша Почта'
					/>
					<Input
						className={styles['inputs']}
						name='password'
						placeholder='Ваш Пароль'
					/>
					<BaseButton type='submit' variantColor='primary'>
						Войти
					</BaseButton>
				</form>
			</div>
			<footer>
				<div className='contact'>
					<h3>Есть вопросы?</h3>
					<p>Звоните и мы с радостью на них ответим</p>
					<p className={styles.number}>+7 800 707 22 03</p>
				</div>
				<div className='social'>
					<h3>Соц сети</h3>
					<p>
						Подписывайтесь на наш канал и будьте в курсе последних новостей.
					</p>
					<div className={styles.socileIcons}>
						<a href='https://youtube.com/'>
							<img src='/images/youtube_photo.png' alt='' />
						</a>
						<a href='https://t.me/c/2228400264/2'>
							<img src='/images/vk_photo.png' alt='' />
						</a>
					</div>
				</div>
				<div className='mobile'>
					<h3>Мобильное приложение</h3>
					<p>
						Скачайте наше мобильное приложение для удобства. Всегда под рукой,
						всегда рядом
					</p>
					<a href='https://youtube.com/'></a>
					<a href='https://t.me/c/2228400264/2'></a>
				</div>
			</footer>
		</div>
	)
}

export default AuthPAge