import React, { useState } from 'react';
import ConnectCard from 'people/utils/connectCard';
import { TicketModalPage } from './TicketModalPage';
import Tickets from './Tickets';

export function TicketsPage() {
  const [connectPerson, setConnectPerson] = useState<any>(null);
  return (
    <>
      <Tickets />
      <TicketModalPage setConnectPerson={setConnectPerson} />
      {connectPerson && (
        <ConnectCard
          dismiss={() => setConnectPerson(null)}
          modalStyle={{
            top: '-64px',
            height: 'calc(100% + 64px)'
          }}
          person={connectPerson}
          visible
        />
      )}
    </>
  );
}
