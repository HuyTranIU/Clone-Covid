import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector/CountrySelector';
import Highlight from './components/Highlight/Highlight';
import Summary from './components/Summary/Summary'
import { getCountries, getReportByCountry } from './api'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])

  useEffect(() => {
    getCountries()
      .then(res => {
        setCountries(res.data)
        setSelectedCountryId('vn') 
      })
  }, [])

  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value)
  }

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(country =>
        country.ISO2.toLowerCase() === selectedCountryId
      )

      getReportByCountry(Slug)
        .then(res => {
          res.data.pop();
          setReport(res.data)
        })
    }
  }, [countries, selectedCountryId])


  return (
    <div className="App">
      <h1>Covid- 19</h1>
      <CountrySelector 
      countries={countries} 
      handleOnchange={handleOnchange} 
      value={selectedCountryId}
      />
      <Highlight report={report} />
      <Summary report={report} />
    </div>
  );
}

export default App;
