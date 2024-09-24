import { ModeToggle } from "../mode-toggle";
import NavLinks from "./nav-links";
import { FaSignOutAlt } from "react-icons/fa";


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="pb-5">
        <ModeToggle />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        <div className="hidden h-auto w-full grow rounded-md bg-muted-foreground/10 md:block"></div>

        <form>
          <button className="flex h-[48px] w-full grow items-center text-muted-foreground justify-center gap-2 rounded-md bg-muted-foreground/10 p-3 text-sm font-medium hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3 transition-all">
            <div className="flex items-center gap-3">
              <FaSignOutAlt />
              Sair
            </div>
          </button>
        </form>
      </div>
    </div>

  )
}