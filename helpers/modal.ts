import { Modal } from 'antd';
import { ModalFuncProps } from 'antd';

const timeOut = 5;
const options: ModalFuncProps = {
  bodyStyle: {
    maxHeight: '400px',
    overflowY: 'auto',
  },
  centered: true,
  maskClosable: true,
  autoFocusButton: null,
  closable: true,
};

const failureModal = (title: string = 'Error', message: string = 'Something went wrong') => {
  const modal = Modal.error({
    ...options,
    title,
    content: message,
  });
  setTimeout(() => {
    modal.destroy();
  }, timeOut * 1000);
};

const successModal = (title = 'Success!', message = 'Successfully') => {
  const modal = Modal.success({
    ...options,
    title,
    content: message,
  });
  setTimeout(() => {
    modal.destroy();
  }, timeOut * 1000);
};

export { failureModal, successModal };
