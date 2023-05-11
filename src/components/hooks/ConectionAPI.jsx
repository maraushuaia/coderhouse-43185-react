import {createClient} from '@supabase/supabase-js';

const ConectionAPI = () => {
  return createClient(process.env.REACT_APP_URL, process.env.REACT_APP_KEY);
};

export default ConectionAPI;
