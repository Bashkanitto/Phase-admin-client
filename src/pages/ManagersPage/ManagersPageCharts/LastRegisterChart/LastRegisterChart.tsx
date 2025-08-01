// components/LastRegisterChart/LastRegisterChart.tsx
import { Skeleton } from '@mantine/core'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { AccountType, fetchAllAccounts } from '@services/AccountsService'
import { Avatar } from '@shared/ui/Avatar'
import { DateItem } from '@shared/ui/DateItem'
import { Table } from '@shared/ui/Table'
import styles from './LastRegisterChart.module.scss'

const LastRegisterChart = () => {
  const [lastConfirmedAccounts, setLastConfirmedAccounts] = useState<AccountType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch the accounts data when the component mounts
  useEffect(() => {
    const loadLastConfirmedAccounts = async () => {
      try {
        const response: any = await fetchAllAccounts()
        setLastConfirmedAccounts(response.data.records)
      } catch (err) {
        setError('Failed to load last confirmed accounts. Please try again later.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadLastConfirmedAccounts()
  }, [])

  if (error) return <div className={styles.error}>{error}</div>

  return (
    <div className={styles.container}>
      <h3 style={{ fontSize: '18px' }} className="ml-4">
        Последние регистрации
      </h3>
      {
        <Table stickyHeader className={styles.table}>
          <Table.Tbody>
            {lastConfirmedAccounts.map(item => (
              <Table.Tr key={item.id}>
                <Table.Td>
                  <Avatar />
                </Table.Td>
                <Table.Td className={styles.nameRole}>
                  <p>{item.firstName || 'Неизвестный'}</p>
                  <p>{item.role || 'Роль не указана'}</p>
                </Table.Td>
                <Table.Td>
                  <DateItem variantColor="secondary">
                    {item.createdAt
                      ? format(new Date(item.createdAt), 'dd.MM.yy - HH:mm')
                      : 'Дата не указана'}
                  </DateItem>
                </Table.Td>
                <Table.Td>
                  <a href={`/vendor/${item.id}`} className={styles.profileLink}>
                    Смотреть профиль
                  </a>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      }
    </div>
  )
}

export default LastRegisterChart
