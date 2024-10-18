import styles from './styles.module.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section>
          <h2>Main Content</h2>
          <p>This is my main content</p>
        </section>
      </main>
      <aside className={styles.aside}>
        <h3>Aside Content</h3>
        <p>This is my aside content</p>
      </aside>
      <Footer />
    </div>
  )
}

export default Home