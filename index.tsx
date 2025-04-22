import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { FaTwitter, FaTelegramPlane, FaGithub } from "react-icons/fa";

export default function SleepyInuLanding() {
  const [yawn, setYawn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-800 font-sans">
      <header className="text-center py-10">
        <img src="/sleepyinu-logo.png" alt="Sleepy Inu Logo" className="mx-auto w-24 h-24 rounded-full shadow-md" />
        <h1 className="text-4xl font-bold mt-4">Sleepy Inu ($SINU)</h1>
        <p className="text-xl mt-2 text-gray-600">The laziest memecoin on Solana... and proud of it 😴</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://twitter.com/sleepyinu" target="_blank" rel="noreferrer">
            <FaTwitter className="w-6 h-6 hover:text-blue-500" />
          </a>
          <a href="https://t.me/sleepyinu" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a href="https://github.com/sleepyinu" target="_blank" rel="noreferrer">
            <FaGithub className="w-6 h-6 hover:text-gray-700" />
          </a>
        </div>
      </header>

      <main className="px-4 md:px-16 py-10 grid gap-8 md:grid-cols-2">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Why $SINU?</h2>
            <p className="mb-4">Because life’s too short to not nap. Sleepy Inu isn’t trying to be the fastest or strongest — just the chillest.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>100% community-driven</li>
              <li>No taxes, no rugs, just Zzz</li>
              <li>Fair launch on Solana</li>
              <li>LP locked, team sleeping</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Whitepaper</h2>
            <p className="mb-4">Want all the deets? Read our one-pager of lazy alpha.</p>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white" onClick={() => window.open('/sleepyinu-whitepaper.pdf', '_blank')}>
              Download Whitepaper
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl md:col-span-2">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Join the Nap Movement</h2>
            <p className="mb-4">We’re live on Solana. Buy $SINU, take a nap, and let the memes do the work.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => setYawn(true)}>
              {yawn ? "*YAWN* You're one of us now." : "Buy $SINU"}
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Sleepy Inu. All snoozes reserved.
      </footer>
    </div>
  );
}
