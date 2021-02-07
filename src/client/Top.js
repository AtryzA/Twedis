import React from 'react';
import { Link } from 'react-router-dom';

export default function Top() {
  return (
    <div>
      <ul>
        <li><Link to="/timeline">Top</Link></li>
      </ul>
    </div>
  );
}