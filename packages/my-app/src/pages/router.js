import { useGlobusAuth } from '@globus/react-auth-context';
import Authenticate from 'bundle/components/pages/authenticate';

export default function Router (){

  console.log(useGlobusAuth());

  return <Authenticate redirect="/" />;
};