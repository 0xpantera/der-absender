import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

/**
 * Header component
 *
 * Layout:
 * ┌─ title & GitHub link ───────────────┐  ConnectButton ─┐
 * │  Absender   [GitHub Icon]           │                 │
 * └──────────────────────────────────────┴─────────────────┘
 */
export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-black/20 backdrop-blur-md">
      {/* Left: title and GitHub link */}
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-semibold tracking-wide">Absender</h1>
        <a
          href="https://github.com/yourusername/yourrepo" // ← replace with actual repo
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="hover:opacity-80 transition-opacity"
        >
          <FaGithub size={28} />
        </a>
      </div>

      {/* Right: Wallet connect */}
      <ConnectButton showBalance={false} chainStatus="icon" />
    </header>
  );
}
