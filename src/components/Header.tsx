import { Link, NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  to?: string;
  href?: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "여긴어디?", to: "/about" },
  { label: "저장소", to: "/archive" },
  { label: "블로그↗", href: "https://blog.junbyeol.me" },
  { label: "이력서↗", href: "https://resume.junbyeol.me" },
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
          <ul className="flex gap-4 md:gap-6 text-sm md:text-base">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="hover:text-[#D03020] transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.to!}
                    aria-label={item.label}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold underline underline-offset-4"
                        : "hover:text-[#D03020] transition-colors"
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
