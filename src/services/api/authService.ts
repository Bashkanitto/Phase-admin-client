/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie'
import { baseApi } from './base'
import { UserType } from './Types'

interface LoginResponse {
	accessToken: string
	refreshToken: string
}

interface SendOtpResponse {
	verifyOtpToken: string
}

interface ConfirmOtpResponse {
	email: string
	otpToken: string
}

const setTokens = (accessToken: string, refreshToken: string) => {
	localStorage.setItem('accessToken', accessToken)
	localStorage.setItem('refreshToken', refreshToken)
	Cookies.set('accessToken', accessToken, { expires: 1 })
	Cookies.set('refreshToken', refreshToken, { expires: 1 })
}

// –––––––––––––––––––––––––––––––Login–––––––––––––––––––––––––––––––
export const login = async (
	identifier: string,
	password: string
): Promise<LoginResponse> => {
	try {
		const response: LoginResponse = await baseApi.post('/auth/login', {
			identifier,
			password,
		})
		const { accessToken, refreshToken } = response

		setTokens(accessToken, refreshToken)

		return { accessToken, refreshToken }
	} catch (error) {
		console.error('Unknown error type:', error)
		throw new Error(`Login failed: Unknown error - ${error}`)
	}
}

// ––––––––––––––––––––––––––––––Log Out–––––––––––––––––––––––––––––––
export const logout = () => {
	localStorage.removeItem('accessToken')
	localStorage.removeItem('refreshToken')
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	window.location.href = '/auth'
}

// Автоматический выход через 24 часа
export const setLogoutTimer = () => {
	setTimeout(logout, 24 * 60 * 60 * 1000)
}

// –––––––––––––––––––––––––––––––Данные пользователя–––––––––––––––––––––––––––––––
export const fetchProfile = async (): Promise<UserType> => {
	try {
		const response: UserType = await baseApi.get('/account/profile')
		return response
	} catch (error) {
		console.error('Unknown error type:', error)

		logout()
		if (window.location.pathname != '/auth') {
			window.location.href == '/auth'
		}

		throw new Error(`Failed to fetch profile: Unknown error - ${error}`)
	}
}
// ––––––––––––––––––––––––––––––––––отправка кода–––––––––––––––––––––––––––––––
export const sendOtpResetPassword = async (
	identifier: string
): Promise<void> => {
	try {
		const response: any = await baseApi.post<SendOtpResponse>(
			'/otp/send-otp-reset-password',
			{
				identifier,
			}
		)

		const { verifyOtpToken } = response
		if (!verifyOtpToken) {
			throw new Error('Сервер не вернул verifyOtpToken.')
		}

		localStorage.setItem('otpToken', verifyOtpToken)
	} catch (error: any) {
		console.error('Ошибка отправки OTP:', error)
		throw new Error(error.response?.message || 'Не удалось отправить код.')
	}
}

// ––––––––––––––––––––––––––––––––––Подтверждение кода –––––––––––––––––––––––––––––––
export const confirmOtpResetPassword = async (
	otpCode: string
): Promise<void> => {
	try {
		const otpToken = localStorage.getItem('otpToken')
		if (!otpToken) {
			throw new Error('Сессия OTP отсутствует.')
		}

		const response: any = await baseApi.post<ConfirmOtpResponse>(
			'/otp/confirm-otp-reset-password',
			{
				otp_session: otpToken,
				otp: otpCode,
			}
		)

		const { otpToken: nextOtpToken } = response

		localStorage.setItem('otpToken', nextOtpToken)
	} catch (error: any) {
		console.error('Ошибка подтверждения OTP:', error)
		throw new Error(error.response?.data?.message || 'Неправильный код OTP.')
	}
}
// ––––––––––––––––––––––––––––––––––Обновление пароля –––––––––––––––––––––––––––––––
export const updatePassword = async (password: string): Promise<void> => {
	try {
		const otpToken = localStorage.getItem('otpToken')

		if (!otpToken) {
			throw new Error('Сессия OTP отсутствует.')
		}

		await baseApi.post('/auth/update-password', {
			otp_session: otpToken,
			password,
		})

		// Очищаем данные после успешного обновления
		localStorage.removeItem('otpToken')
		localStorage.removeItem('otpLogin')
	} catch (error: any) {
		console.error('Ошибка обновления пароля:', error)
		throw new Error(
			error.response?.data?.message || 'Не удалось обновить пароль.'
		)
	}
}

// ––––––––––––––––––––––––––––––––––Обновление токена –––––––––––––––––––––––––––––––

interface RefreshTokenResponse {
	accessToken: string
	refreshToken: string
}

export const refreshAccessToken = async (): Promise<void> => {
	try {
		const refreshToken = localStorage.getItem('refreshToken')
		if (!refreshToken) {
			throw new Error('Рефреш-токен отсутствует.')
		}

		// Запрос обновления токена
		const response: RefreshTokenResponse = await baseApi.post('/auth/refresh', {
			refreshToken,
		})

		const { accessToken, refreshToken: newRefreshToken } = response
		setTokens(accessToken, newRefreshToken)
	} catch (error: any) {
		console.error('Ошибка обновления токена:', error)

		// Специфическая проверка на 401 Unauthorized
		if (error.response?.status === 401) {
			console.error('Токен отозван или недействителен. Выполняется выход...')
			logout()
		}

		throw new Error(
			error.response?.data?.message || 'Не удалось обновить токен.'
		)
	}
}
