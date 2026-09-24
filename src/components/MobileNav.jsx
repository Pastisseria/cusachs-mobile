import { NavLink } from "react-router-dom";

const accesos = [
  { to: "/catering", icono: "🍽️", texto: "Catering" },
  { to: "/produccion", icono: "🏭", texto: "Producción" },
  { to: "/clientes", icono: "👥", texto: "Clientes" },
  { to: "/presupuestos", icono: "📄", texto: "Presupuestos" },
];

export default function MobileNav() {
  return (
    <nav className="mobile-nav" aria-label="Accesos principales">
      {accesos.map((acceso) => (
        <NavLink
          key={acceso.to}
          to={acceso.to}
          className={({ isActive }) => `mobile-nav-item${isActive ? " active" : ""}`}
        >
          <span className="mobile-nav-icon" aria-hidden="true">{acceso.icono}</span>
          <span>{acceso.texto}</span>
        </NavLink>
      ))}
    </nav>
  );
}
