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
                    Gestion
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Excel
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Secteur sanitaire
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    <div className='flex justify-around'>
                      <th className='px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                        Secteur médico-social
                      </th>
                      <th className='px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                        EHPAD
                      </th>
                      <th className='px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                        ESAT
                      </th>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Secteur commercial
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Assurée par nos partenaires
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Publics-Associatifs
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Publics et Associatifs
                  </th>
                </tr>
              </thead>
              <tbody className='min-w-full leading-normal'>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/budget-previsionnel'>
                      Budget prévisionnel
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/debutant'>Débutant</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/comptabilite-M21'>Comptabilité M 21</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/comptabilite-M22-M22bis'>
                      Comptabilité M22 et M22 bis
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/budget-previsionnel'>
                      Tableau de bord
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/debutant'>Confirmé</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/comptabilite-M21'>Compte financier</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/comptabilite-M22-M22bis'>
                      EPRD - ERRD
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/budget-previsionnel'>
                      Plan de financement
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/comptabilite-M22-M22bis'>
                      Plan de financement : PPI
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/budget-previsionnel'>
                      Analyse financière
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/comptabilite-M22-M22bis'>
                      Analyse financière
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/formations/comptabilite-M22-M22bis'>
                      Fiscalité : TVA - TS
                    </a>
                  </td>
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
