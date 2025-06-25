import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import MetricCard from "./MetricCard";
import ClientChart from "./ClientChart";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

export default function ClientStats() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const { industry, location, subscription, search } = useSelector(
    (s) => s.filters
  );

  /* fetch mock-API data */
  useEffect(() => {
    axios
      .get("http://localhost:5000/clients")
      .then((r) => {
        setClients(r.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  /* apply filters */
  const filtered = clients.filter(
    (c) =>
      (!industry || c.industry === industry) &&
      (!location || c.location === location) &&
      (!subscription || c.subscription_tier === subscription) &&
      (!search || c.name.toLowerCase().includes(search.toLowerCase()))
  );

  const total = filtered.length;
  const active = filtered.filter((c) => c.is_active).length;

  /* pie-chart data */
  const industryData = Object.values(
    filtered.reduce((acc, c) => {
      acc[c.industry] = acc[c.industry] || { name: c.industry, value: 0 };
      acc[c.industry].value += 1;
      return acc;
    }, {})
  );

  if (loading) return <div className="loader" />;

  /* detects any active filter/search */
  const isFiltered =
    industry !== "" || location !== "" || subscription !== "" || search !== "";

  return (
    <section>
      <h2>Client Statistics</h2>
      <SearchBar />
      <FilterBar clients={clients} />

      {/* KPI cards */}
      <div className="metrics-grid">
        <MetricCard title="Total Clients" value={total} />
        <MetricCard title="Active Clients" value={active} />
      </div>

      {/* chart card */}
      <div className="chart-wrapper">
        <h3>Industry Distribution</h3>
        <ClientChart data={industryData} />
      </div>

      {/* table */}
      <h3>{isFiltered ? "Matching Clients Details" : "Clients Details"}</h3>

      {filtered.length ? (
        <div className="table-responsive">
          <table className="client-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Industry</th>
                <th>Location</th>
                <th>Tier</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.industry}</td>
                  <td>{c.location}</td>
                  <td>{c.subscription_tier}</td>
                  <td>{c.is_active ? "Active" : "Inactive"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p
          style={{
            padding: "1rem",
            background: "var(--surface-subtle)",
            borderRadius: "0.5rem",
          }}
        >
          No data found for the selected filters.
        </p>
      )}
    </section>
  );
}
