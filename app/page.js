import styles from './page.module.css'
import Header from '@/components/header'
import Content from '@/components/content'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Content />
    </main>
  )
}
