import { cn } from "@/lib/utils";
import {
  createContext,
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SidebarTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  side?: "left" | "right";
  defaultOpen?: boolean;
  dir?: "rtl" | "ltr";
}
const Sidebar = ({ children, className }: SidebarTypes) => {
  const context = useContext(sidebarContext);
  if (context) {
    const { open, side, dir } = context;
    const sideOpenProp = side === "right" ? { right: "0" } : { left: "0" };
    const sideCloseProp =
      side === "right" ? { right: "-200%" } : { left: "-200%" };
    return (
      <aside
        className={cn(
          `fixed top-0 bottom-0 min-w-fit h-dvh bg-inherit z-50 transition-all duration-300`,
          className
        )}
        style={open ? sideOpenProp : sideCloseProp}
        dir={dir}
      >
        {children}
      </aside>
    );
  }
};

type ContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  side?: "right" | "left";
  dir?: "rtl" | "ltr";
  defaultOpen?: boolean;
} | null;

const sidebarContext = createContext<ContextType>(null);

const useSidebar = () => {
  const context = useContext(sidebarContext);
  if (!context) {
    throw new Error("No context!");
  } else {
    return {
      open: context.open,
      setOpen: context.setOpen,
    };
  }
};

const SidebarProvider = ({
  children,
  dir = "rtl",
  side = "left",
  defaultOpen = false,
}: SidebarTypes) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <sidebarContext.Provider value={{ open, setOpen, side, dir, defaultOpen }}>
      <div
        className={`${open ? "w-full h-dvh" : "w-0 h-0"} fixed z-40`}
        onClick={() => setOpen(false)}
      />
      {children}
    </sidebarContext.Provider>
  );
};

export { Sidebar, useSidebar };
export default SidebarProvider;
