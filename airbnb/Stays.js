import React from 'react';
import { useParams } from 'react-router-dom';
import ListingDetail from '../components/Navbar';

function ListingPage() {
  const { id } = useParams();
  // Fetch listing details based on id
  const listing = { id, title: 'Cozy Cottage', location: 'Mountain View', description: 'A lovely place to stay' };

  return (
    <div className="ListingPage">
      <ListingDetail listing={listing} />
    </div>
  );
}

export default ListingPage;
