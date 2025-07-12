import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Zap, Eye, Code, ArrowLeft } from "lucide-react";
import Navbar from "@/components/sections/navbar/default";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden ">
      <Navbar />

      <main className="relative z-10 px-4 py-12 g-font">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 inter-font">
              About{" "}
              <span className="text-blue-500 is-font text-6xl">Secnote</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto g-font">
              <span className="font-bold">Secnote</span> is a secure platform
              for sending confidential information that automatically
              self-destructs after being read. Built with privacy and security
              as core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 g-font">
            <Card>
              <CardHeader className="text-center">
                {/* <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" /> */}
                <CardTitle className="text-lg">E2E Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Advanced End-to-End encryption ensures your messages remain
                  completely private.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                {/* <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" /> */}
                <CardTitle className="text-lg">Self-Destructing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Notes automatically delete after being read once, leaving no
                  digital traces behind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                {/* <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" /> */}
                <CardTitle className="text-lg">No Logging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We don't store, log, or track any of your messages. Complete
                  privacy guaranteed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                {/* <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" /> */}
                <CardTitle className="text-lg">No Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Secure access without user accounts no personal information is
                  collected or stored.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16 g-font">
            <CardHeader>
              <CardTitle className="text-2xl">
                Enhanced Encryption for Ultimate Privacy
              </CardTitle>
              <CardDescription>
                Robust end-to-end encryption using modern cryptographic
                primitives
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <span className="font-bold">Secnote</span> uses the
                XSalsa20-Poly1305 cipher suite to provide secure,
                high-performance encryption. This method ensures that only the
                intended recipient, with the correct decryption key, can access
                the content of the note.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Technical Details:
                </h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>
                    • <strong>Encryption Algorithm:</strong> XSalsa20 stream
                    cipher (256-bit key)
                  </li>
                  <li>
                    • <strong>Message Authentication:</strong> Poly1305 MAC
                    (128-bit authenticator)
                  </li>
                  <li>
                    • <strong>Key Derivation:</strong> Based on secure, random
                    nonce generation
                  </li>
                  <li>
                    • <strong>No Server-Side Access:</strong> Encryption and
                    decryption happen exclusively in the user's browser
                  </li>
                </ul>
              </div>

              <p className="text-gray-700">
                This combination of modern encryption and browser-based security
                guarantees confidentiality, authenticity, and tamper resistance
                even <span className="font-bold">Secnote</span> cannot read your
                note.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-16 g-font">
            <CardHeader>
              <CardTitle className="text-2xl">Security & Privacy</CardTitle>
              <CardDescription>
                Your privacy is our top priority
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 g-font">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What We Do:
                  </h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>✓ Encrypt all notes with zero-width characters</li>
                    <li>✓ Automatically delete notes after reading</li>
                    <li>✓ Generate unique, secure links</li>
                    <li>✓ Use client-side encryption</li>
                    <li>✓ Provide secure transmission</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What We Don't Do:
                  </h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>✗ Store your messages permanently</li>
                    <li>✗ Log or track user activity</li>
                    <li>✗ Share data with third parties</li>
                    <li>✗ Keep backups of notes</li>
                    <li>✗ Require user registration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center g-font">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Send Secure Notes?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Start using Secnote today to send confidential information that
              automatically self-destructs after being read.
            </p>
            <Link to="/create">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg cursor-pointer">
                Create Your First Note
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
