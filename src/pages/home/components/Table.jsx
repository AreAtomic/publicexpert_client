const Table = () => {
  return (
    <div className='bg-white p-8 rounded-md w-full'>
      <div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Nos métiers
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Nos domaines d’intervention
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Nos secteurs d’intervention
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Nos formations
                  </th>
                </tr>
              </thead>
              <tbody className='min-w-full leading-normal'>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Comptabilité</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/domaines'>Comptabilité</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteurs'>Commerce</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations'>Contrôle des comptes M22</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Fiscalité</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/domaines'>Sociétés commerciales</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteurs'>Artisanat</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations'>Analyse financière M22</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Paye et déclarations sociales</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/domaines'>Etablissements publics</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteurs'>Immobilier</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations'>Fiscalité des EHPAD</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Gestion</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/domaines'>Associations</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations'>Fiscalité des ESAT</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Plan de financement</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/domaines'>Groupements</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteurs'>Secteur sanitaire</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations'>Contrôle de gestion</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Audit des comptes</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/domaines'>Sociétés civiles</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteurs'>Secteur médico-social</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations'>Plan de financement : PPI</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Organisation administrative</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteurs'>EHPAD</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations'>EPRD et ERRD</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/metiers'>Formalités juridiques</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteurs'>ESAT</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
