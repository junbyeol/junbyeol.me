import { Link, NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "여긴어디?", to: "/about" },
  { label: "블로그↗", to: "/blog" },
  { label: "이력서↗", to: "/resume" },
  { label: "방명록", to: "/guestbook" },
];

const Header = () => {
  return (
    <header className="border-b-[3px] border-text">
      <div className="flex flex-col gap-3 px-8 py-4 md:flex-row md:items-center md:justify-between md:px-32 md:gap-0">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-[#D03020] transition-colors"
          aria-label="홈으로 이동"
        >
          JUNBYEOL.ME
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="flex gap-6">
            {NAV_ITEMS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  aria-label={label}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold underline underline-offset-4"
                      : "hover:text-[#D03020] transition-colors"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
