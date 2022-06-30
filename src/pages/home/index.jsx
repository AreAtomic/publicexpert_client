import { Table } from './components';

const Home = () => {
  return (
    <div>
      <Table />
      <div className='w-fit bg-blue-pe-50 mx-10 rounded-sm py-3'>
        FORMATION : Public Expert est agréé en qualité de formateur Qualiopi
      </div>
      <div className='mt-16'>
        <div className='text-xl font-bold mb-3'>Nos objectifs</div>
        <div className='grid grid-cols-2 mx-10 gap-x-10 gap-y-3'>
          <div className='w-fit border border-blue-pe-50 rounded-sm py-3'>
            Vous être utile
          </div>
          <div className='w-fit border border-blue-pe-50 rounded-sm py-3'>
            Vous permettre d’être efficace
          </div>
          <div className='w-fit border border-blue-pe-50 rounded-sm py-3'>
            Favoriser votre développement
          </div>
          <div className='w-fit border border-blue-pe-50 rounded-sm py-3'>
            Vous informer
          </div>
        </div>
      </div>
      <p className='text-left mx-10 mt-5'>
        Public Expert est un cabinet d’expertise comptable tourné vers
        l’adaptation aux nouvelles technologies dans les domaines de la gestion
        des entreprises. Nous considérons que les nouveaux enjeux consistent à
        mettre en œuvre et à utiliser les outils numériques. Nous prendrons le
        temps d’apprendre à bien connaître votre entreprise et ses besoins.
        L’objectif est de vous aider à trouver et mettre en place les bons
        outils et applications qui vous seraient utiles. Nous vous aiderons à
        trouver les partenaires adaptés à vos spécificités. La mise en œuvre de
        ces outils s’effectue dans le cadre du respect de la réglementation et
        doit avoir pour seul but : la maîtrise de la gestion pour assurer le
        développement. Dans un environnement où les évolutions technologiques
        sont nombreuses et permanentes, il est indispensable de savoir, de
        comprendre et de s’adapter rapidement. Public Expert se positionne pour
        aider les petites et moyennes entreprises dans cette transition
        numérique.
      </p>
    </div>
  );
};

export default Home;
