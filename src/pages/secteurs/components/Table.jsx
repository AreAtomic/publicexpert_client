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
                    Commerce / Artisanat
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Immobilier
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Secteur sanitaire
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Secteur médico-social
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    EHPAD publics
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    ESAT publics
                  </th>
                </tr>
                <tr>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'></th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'></th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Publics-Associatifs
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Publics-Associatifs
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    EHPAD Associatifs
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    ESAT Associatifs
                  </th>
                </tr>
              </thead>
              <tbody className='min-w-full leading-normal'>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/hopitaux-proximite'>Hôpitaux de proximité</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteur-personne-agee'>
                      Secteur de la personne âgée
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>
                      Comptabilité M22 et M22 bis
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>
                      Comptabilité M22 et M22 bis
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/hopitaux-proximite'>Comptabilité M 21</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteur-personne-handicapee'>
                      Secteur de la personne handicapée
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>EPRD - ERRD</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>EPRD-ERRD</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/secteur-personne-handicapee'>
                      Secteur de la petite enfance
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>PPI</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>PPI</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>CREF</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>Fiscalité : TVA - TS</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/comptabilite-M22-M22bis'>Fiscalité : TVA - TS</a>
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
