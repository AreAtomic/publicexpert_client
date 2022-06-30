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
                    Comptabilité / Audit
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Fiscalité
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Paye
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Gestion
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Plan de financement
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Juridique
                  </th>
                  <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center'>
                    Organisation
                  </th>
                </tr>
              </thead>
              <tbody className='min-w-full leading-normal'>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/tenue-comptabilite'>Tenue de comptabilité</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/declaration-fiscale'>Déclarations fiscales</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/bulletins-paye'>Bulletins de paye</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/budget-previsionnel'>Budget prévisionnel</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/creation-activite'>Création d'activité</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/contrats'>Contrats</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/amelioration-procedure'>
                      Amélioration de procédures
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/tenue-comptabilite'>
                      Contrôle – audit des comptes
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/declaration-fiscale'>Liasse fiscale</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/bulletins-paye'>Déclarations sociales</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/budget-previsionnel'>Tableau de bord</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/creation-activite'>Développement</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/contrats'>Formalités juridiques</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/amelioration-procedure'>Choix des applications</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/tenue-comptabilite'>Comptes annuels</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/declaration-fiscale'>
                      Relations avec l’administration fiscale
                    </a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/bulletins-paye'>Relations avec l’URSSAF</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/budget-previsionnel'>Réduction des coûts</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/creation-activite'>Recherche de financements</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/contrats'>Création de société</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/amelioration-procedure'>
                      Gestion Electronique des Données
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/tenue-comptabilite'>Analyse financière</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/optimisation-fiscale'>Optimisation</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/optimisation-paye'>Optimisation</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/budget-previsionnel'>Optimisation des recettes</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/creation-activite'>PPI</a>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/amelioration-procedure'>Nouvelles technologies</a>
                  </td>
                </tr>
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'></td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <a href='/budget-previsionnel'>EPRD - ERRD</a>
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
