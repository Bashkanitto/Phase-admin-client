import { ComponentPropsWithRef, ReactNode } from 'react'
import styles from './UserInfo.module.scss'

interface UserInfoProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  avatar: ReactNode
  title: string
  description: string
}

export const UserInfo = ({ className, avatar, title, description, ...props }: UserInfoProps) => {
  return (
    <div className={styles['user-info']} {...props}>
      {avatar}
      <div className={styles['content']}>
        <h6 className={styles['title']}>{title}</h6>
        <p className={styles['description']}>{description}</p>
      </div>
    </div>
  )
}
