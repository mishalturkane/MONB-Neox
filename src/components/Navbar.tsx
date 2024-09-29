"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { div } from "framer-motion/client";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Click">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/generate-wallet">Gerate Wallet</HoveredLink>
            <HoveredLink href="/foucet-neox">faucet</HoveredLink>
            <HoveredLink href="/generate-token">Generate - Token</HoveredLink>
            <HoveredLink href="/nft-marketplace">NFT -  maretplace</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
