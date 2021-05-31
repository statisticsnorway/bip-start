import './App.css'
import {HRForm} from './components'

function App () {
 
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Welcome to BIP-Start! Here are some useful links:
        </p>
        <a className='App-link' href='https://statistics-norway.atlassian.net/wiki/spaces/BIP/overview'>BIP wiki</a>
        <a className='App-link' href='https://github.com/statisticsnorway/ssb-developer-guide'>SSB developer guide</a>
        <a className='App-link' href='https://github.com/statisticsnorway/platform-dev'>SSB platform-dev</a>
        <a className='App-link' href='https://statistics-norway.atlassian.net/browse/STRATUS'>STRATUS jira site</a>
      </header>
      <HRForm/>
     </div>
  )
}

export default App
