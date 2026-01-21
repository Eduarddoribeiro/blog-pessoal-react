import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button
            className='rounded-xl text-blue-900 border-2 border-blue-900 py-3 px-8 font-bold hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl'>
            Nova Postagem
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem'
        }}
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;