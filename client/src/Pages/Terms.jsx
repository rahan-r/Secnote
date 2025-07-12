import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  ArrowLeft,
  AlertTriangle,
  Scale,
  FileText,
  Users,
} from "lucide-react";
import Navbar from "@/components/sections/navbar/default";

export default function Terms() {
  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
      <Navbar />
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                By accessing or using Secnote ("the Service"), you agree to be
                bound by these Terms and Conditions ("Terms"). If you do not
                agree to these Terms, please do not use the Service.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                These Terms apply to all users of the Service, including
                visitors who create or view notes.
              </p>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">
                2. Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  What Secnote Does
                </h4>
                <p className="text-gray-700 text-sm">
                  Secnote is a web-based service that allows users to create
                  encrypted, self-destructing notes. Notes are automatically
                  deleted after being read once, providing a secure way to share
                  confidential information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Service Features
                </h4>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Zero-width character encryption</li>
                  <li>Optional password protection</li>
                  <li>Automatic note deletion after reading</li>
                  <li>No user registration required</li>
                  <li>Secure link generation</li>
                </ul>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">3. Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Permitted Uses
                </h4>
                <p className="text-gray-700 text-sm">
                  You may use Secnote for legitimate purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Sharing confidential business information</li>
                  <li>Sending personal messages securely</li>
                  <li>Transmitting sensitive data temporarily</li>
                  <li>Any lawful communication needs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Prohibited Uses
                </h4>
                <p className="text-gray-700 text-sm">
                  You agree NOT to use Secnote for:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Illegal activities or content</li>
                  <li>Harassment, threats, or abusive content</li>
                  <li>Spam or unsolicited communications</li>
                  <li>Malware, viruses, or harmful code</li>
                  <li>
                    Copyright infringement or intellectual property violations
                  </li>
                  <li>Attempting to hack or compromise the service</li>
                  <li>Creating excessive notes to overload the system</li>
                </ul>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">
                4. User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Your Obligations
                </h4>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>
                    Use the service in compliance with all applicable laws
                  </li>
                  <li>Respect the rights and privacy of others</li>
                  <li>
                    Keep your note links secure and share them responsibly
                  </li>
                  <li>Not attempt to circumvent security measures</li>
                  <li>Report any security vulnerabilities you discover</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Content Responsibility
                </h4>
                <p className="text-gray-700 text-sm">
                  You are solely responsible for the content of your notes. We
                  do not monitor, review, or control note content, and we are
                  not responsible for any content created by users.
                </p>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">
                5. Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Your Content
                </h4>
                <p className="text-gray-700 text-sm">
                  You retain all rights to the content you create in your notes.
                  By using Secnote, you grant us only the limited right to store
                  and transmit your content as necessary to provide the service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Our Service
                </h4>
                <p className="text-gray-700 text-sm">
                  Secnote, including its design, code, features, and trademarks,
                  is owned by us and protected by intellectual property laws.
                  You may not copy, modify, or distribute our service without
                  permission.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Open Source Components
                </h4>
                <p className="text-gray-700 text-sm">
                  Some components of Secnote may use open source software. Such
                  components are governed by their respective licenses, which
                  are available upon request.
                </p>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">7. Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Service Uptime
                </h4>
                <p className="text-gray-700 text-sm">
                  We strive to maintain high service availability, but we do not
                  guarantee uninterrupted access. The service may be temporarily
                  unavailable due to maintenance, updates, or technical issues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Service Modifications
                </h4>
                <p className="text-gray-700 text-sm">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of the service at any time, with or without notice. We
                  are not liable for any modification, suspension, or
                  discontinuation.
                </p>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">
                8. Disclaimers and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Service Warranty
                </h4>
                <p className="text-gray-700 text-sm">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL
                  WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Limitation of Liability
                </h4>
                <p className="text-gray-700 text-sm">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
                  FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                  PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, REVENUE, OR PROFITS.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Security Disclaimer
                </h4>
                <p className="text-gray-700 text-sm">
                  While we implement security measures, no system is completely
                  secure. You use the service at your own risk and should not
                  rely solely on our security measures for highly sensitive
                  information.
                </p>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">9. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Termination by You
                </h4>
                <p className="text-gray-700 text-sm">
                  You may stop using the service at any time. Since we don't
                  require registration, simply discontinuing use constitutes
                  termination.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Termination by Us
                </h4>
                <p className="text-gray-700 text-sm">
                  We may terminate or suspend your access to the service
                  immediately if you violate these Terms or engage in prohibited
                  activities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Effect of Termination
                </h4>
                <p className="text-gray-700 text-sm">
                  Upon termination, your right to use the service ceases
                  immediately. Any notes you've created will continue to follow
                  their normal deletion schedule.
                </p>
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle className="text-xl">10. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                We may update these Terms from time to time to reflect changes
                in our service or legal requirements. When we make significant
                changes, we will notify users by posting the updated Terms on
                our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 text-sm mt-4">
                Your continued use of the service after changes are posted
                constitutes acceptance of the new Terms. If you do not agree to
                the updated Terms, you should stop using the service.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
