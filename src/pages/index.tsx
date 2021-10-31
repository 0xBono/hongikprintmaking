import dynamic from 'next/dynamic';

const DynamicHome = dynamic(() => import('containers/Home/Home'), {
  ssr: false,
});

export default DynamicHome;
