import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, Eye, Lock, Server, Users } from "lucide-react";
import Navbar from "@/components/sections/navbar/default";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
      <Navbar />
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                1. Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Note Content
                </h4>
                <p className="text-gray-700 text-sm">
                  We temporarily store your encrypted note content only for the
                  purpose of delivering it to the intended recipient. Notes are
                  encrypted using XSalsa20-Poly1305 encryption and/or password
                  protection before storage.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Technical Information
                </h4>
                <p className="text-gray-700 text-sm">
                  We may collect basic technical information such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Browser type and version (for compatibility)</li>
                  <li>Device type (mobile/desktop) for responsive design</li>
                  <li>Timestamp of note creation (for automatic deletion)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  What We Don't Collect
                </h4>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>
                    Personal identification information (name, email, phone)
                  </li>
                  <li>IP addresses or precise location data</li>
                  <li>Browsing history or activity tracking</li>
                  <li>Social media profiles or accounts</li>
                </ul>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">
                2. How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Primary Use
                </h4>
                <p className="text-gray-700 text-sm">
                  Your note content is used solely to provide the secure note
                  delivery service. We encrypt and temporarily store your notes
                  only long enough to deliver them to recipients.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Service Improvement
                </h4>
                <p className="text-gray-700 text-sm">
                  Anonymous technical data may be used to:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Improve application performance and reliability</li>
                  <li>Optimize user experience across different devices</li>
                  <li>Identify and fix technical issues</li>
                  <li>Enhance security measures</li>
                </ul>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">
                3. Data Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  No Third-Party Sharing
                </h4>
                <p className="text-gray-700 text-sm">
                  We do not sell, trade, or share your data with third parties
                  for marketing or commercial purposes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Legal Requirements
                </h4>
                <p className="text-gray-700 text-sm">
                  We may disclose information only if required by law, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Valid court orders or legal processes</li>
                  <li>Protection against fraud or security threats</li>
                  <li>Compliance with applicable laws and regulations</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>Note:</strong> Due to our encryption methods and
                  automatic deletion, we often cannot access note content even
                  if legally required to do so.
                </p>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                <p className="text-gray-700 text-sm">
                  All notes are encrypted using advanced methods including:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>XSalsa20-Poly1305 steganographic encryption</li>
                  <li>Optional password-based encryption (XOR cipher)</li>
                  <li>Client-side encryption before transmission</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Automatic Deletion
                </h4>
                <p className="text-gray-700 text-sm">
                  Notes are automatically and permanently deleted:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Immediately after being read by the recipient</li>
                  <li>After 30 days if never accessed (maximum retention)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Security Measures
                </h4>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits and updates</li>
                  <li>No permanent storage of note content</li>
                </ul>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Data Control
                </h4>
                <p className="text-gray-700 text-sm">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Know what data we collect and how it's used</li>
                  <li>
                    Request deletion of your data (though notes auto-delete)
                  </li>
                  <li>Access any personal information we may have</li>
                  <li>Opt out of any optional data collection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                <p className="text-gray-700 text-sm">
                  For privacy-related questions or requests, contact us at:{" "}
                  <strong>support@secnote.co</strong>
                </p>
              </div>
            </CardContent>

            {/* <CardHeader>
              <CardTitle className="text-xl">6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies Only</h4>
                <p className="text-gray-700 text-sm">We use minimal, essential cookies for:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Maintaining your session while creating notes</li>
                  <li>Remembering your encryption preferences</li>
                  <li>Ensuring proper application functionality</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">No Tracking Cookies</h4>
                <p className="text-gray-700 text-sm">We do not use:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Analytics cookies or tracking pixels</li>
                  <li>Advertising or marketing cookies</li>
                  <li>Social media tracking cookies</li>
                  <li>Third-party tracking services</li>
                </ul>
              </div>
            </CardContent> */}

            <CardHeader>
              <CardTitle className="text-xl">
                7. Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                We may update this Privacy Policy occasionally to reflect
                changes in our practices or legal requirements. Any significant
                changes will be prominently displayed on our website. Your
                continued use of Secnote after changes are posted constitutes
                acceptance of the updated policy.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                <strong>Current Version:</strong> 1.8.0 (January 2025)
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900">
              Questions About Privacy?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 text-sm mb-4">
              We're committed to transparency about our privacy practices. If
              you have any questions or concerns, please don't hesitate to
              contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Contact Us
                </Button>
              </Link>
              <Link to="/terms">
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                >
                  View Terms & Conditions
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
