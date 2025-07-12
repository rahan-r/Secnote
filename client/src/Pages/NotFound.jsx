"use client";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Home, Search, FileX, Zap } from "lucide-react";
import Navbar from "@/components/sections/navbar/default";
import FooterSection2 from "@/components/sections/footer/default";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      <header className="relative z-10 bg-white/70 backdrop-blur-md border-b border-white/20">
        <Navbar />
      </header>

      <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 g-font">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-white/30 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-2">
                Oops! Page Not Found
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-600">
                The page you're looking for seems to have vanished into thin
                air, just like our self-destructing notes!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <FooterSection2 />
    </div>
  );
}
