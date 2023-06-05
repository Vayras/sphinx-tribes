import { observer } from 'mobx-react-lite';
import StartUpModal from 'people/utils/start_up_modal';
import React from 'react';
import { useStores } from 'store';

export const GetWorkStartupModal = observer(() => {
  const { modals } = useStores();
  if (modals.startupModal) {
    return (
      <StartUpModal
        closeModal={() => modals.setStartupModal(false)}
        dataObject="getWork"
        buttonColor="primary"
      />
    );
  }
});
