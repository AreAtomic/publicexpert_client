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
                    Entreprises individuelles
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Sociétés commerciales
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Etablissements publics
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Associations
                  </th>
                </tr>
              </thead>
              <tbody className='min-w-full leading-normal'>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/commercant'>Commerçants</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/sarl'>SARL</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/etablissement-public-administratif'>
                      Etablissement Public Administratif
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteur-personne-agee'>
                      Secteur de la personne âgée
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/commercant'>Artisans</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/sarl'>Société Anonyme</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/etablissement-public-administratif'>
                      EPIC et SPIC
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteur-personne-handicapee'>
                      Secteur de la personne handicapée
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/commercant'>Professions libérales</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/snc'>SNC</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/etablissement-public-administratif'>
                      Groupement public
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteur-personne-handicapee'>
                      Secteur de l'enfance
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/tenue-comptabilite'>
                      Louer en meublé non professionnel
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/optimisation-fiscale'>SCI</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/optimisation-paye'></a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/budget-previsionnel'>Secteur social</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    Passage en société
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
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
