import { ComponentPropsWithRef, ReactNode } from 'react'
import styles from './ContentLayout.module.scss'

interface ContentLayoutProps extends ComponentPropsWithRef<'div'> {
  header?: ReactNode
}

export const ContentLayout = ({ header, children, className, ...props }: ContentLayoutProps) => {
  return (
    <div className={styles['content-layout']} {...props}>
      {header && <header className={styles['header']}>{header}</header>}
      {children}
    </div>
  )
}
