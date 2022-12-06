
import './App.css';
import DataCard from './components/DataCard';
import Sidebar from './components/Sidebar';
import VisitorSection from './components/VisitorSection';
import Analysis from './components/Analysis';

function App() {
  return (
    <>
      <body>
        <div className='dashboard'>
          <Sidebar />

          <DataCard label="Reviews" counter="1,281" />
          <DataCard label="Average Rating" counter="4.6" />
          <Analysis label="Sentiment Analysis" />

          <VisitorSection label="Website Visitors" counter="821" />
        </div>
      </body>
    </>

  );
}

export default App;
