import React from 'react';
import { useLocation } from 'react-router-dom';
import Listing from '../components/CategoryTabs';

function SearchResultsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchLocation = query.get('location');

  const listings = [
    { id: 1, title: 'Cozy Cottage', location: searchLocation },
    { id: 2, title: 'Beach House', location: searchLocation },
    // Add more as needed
  ];

  return (
    <div className="SearchResultsPage">
      <h1>Results for {searchLocation}</h1>
      <div className="listings">
        {listings.map(listing => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
