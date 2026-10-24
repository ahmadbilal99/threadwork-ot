export default function ServiceCard({ service, showAge = true }) {
  const Icon = service.icon;
  return (
    <div className="service-card">
      <Icon size={26} strokeWidth={1.6} />
      <h3>{service.title}</h3>
      {showAge && <p className="service-age">{service.age}</p>}
      <p>{service.desc}</p>
    </div>
  );
}
