import { Table } from './components';

const Secteurs = () => {
  return (
    <div>
      <div className='text-xl font-bold mb-3'>Nos secteurs d’intervention</div>
      <Table />
      <p className='text-left ml-10'>
        Pour en savoir plus cliquer sur le sujet qui vous intéresse
      </p>
    </div>
  );
};

export default Secteurs;
