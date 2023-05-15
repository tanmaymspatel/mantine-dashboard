import './App.css'
import { Paper, createStyles } from '@mantine/core'
import Header from './core/components/Header'
import SideBar from './core/components/SideBar'
import MainComponent from './components/MainComponent'

const useStyle = createStyles({
  'wrapper': {
    display: "flex",
    height: "100%"
  },
  'main-wrapper': {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  'main-content': {
    flexGrow: 1
  }
})

function App() {
  const { classes } = useStyle()
  return (
    <Paper className={classes.wrapper}>
      <aside>
        <SideBar />
      </aside>
      <div className={classes['main-wrapper']}>
        <header>
          <Header />
        </header>
        <main className={classes['main-content']}>
          <MainComponent />
        </main>
      </div>

    </Paper>
  )
}

export default App
