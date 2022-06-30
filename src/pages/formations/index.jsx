import { Table } from './components';

const Formations = () => {
  return (
    <div>
      <div className='text-xl font-bold mb-3'>Nos formations</div>
      <Table />
      <p className='text-left ml-10'>
        Pour en savoir plus cliquer sur le sujet qui vous intéresse
      </p>
      <a href='/condition-generals'>Conditions générales</a>
    </div>
  );
};

export default Formations;
