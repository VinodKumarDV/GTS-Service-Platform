import { useDispatch, useSelector } from 'react-redux';
import {
  setIndustry, setLocation, setSubscription, clearFilters
} from '../store/filterSlice';

export default function FilterBar({ clients }) {
  const dispatch = useDispatch();
  const f = useSelector(s=>s.filters);

  const industries=[...new Set(clients.map(c=>c.industry))];
  const locations =[...new Set(clients.map(c=>c.location))];
  const tiers     =[...new Set(clients.map(c=>c.subscription_tier))];

  return (
    <div className="filter-bar" style={{marginBottom:'1rem'}}>
      <select value={f.industry} onChange={e=>dispatch(setIndustry(e.target.value))}>
        <option value="">All Industries</option>
        {industries.map(ind=><option key={ind}>{ind}</option>)}
      </select>

      <select value={f.location} onChange={e=>dispatch(setLocation(e.target.value))}>
        <option value="">All Locations</option>
        {locations.map(loc=><option key={loc}>{loc}</option>)}
      </select>

      <select value={f.subscription} onChange={e=>dispatch(setSubscription(e.target.value))}>
        <option value="">All Tiers</option>
        {tiers.map(tier=><option key={tier}>{tier}</option>)}
      </select>

      <button onClick={()=>dispatch(clearFilters())}>Reset</button>
    </div>
  );
}
