"use client";

import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, Mail, Twitter, Github, Scale } from "lucide-react";
import Navbar from "@/components/sections/navbar/default";

export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
      <Navbar />
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, suggestion, or need help? We're here to assist you.
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                {/* <Mail className="w-5 h-5 text-blue-500 mt-0.5" /> */}
                <div>
                  <p className="font-medium text-gray-900">General Support</p>
                  <p className="text-sm text-gray-600">support@secnote.co</p>
                  <p className="text-xs text-gray-500 mt-1">
                    For general questions and technical support
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Privacy & Security</p>
                  <p className="text-sm text-gray-600">privacy@privnote.com</p>
                  <p className="text-xs text-gray-500 mt-1">For privacy-related questions and security reports</p>
                </div>
              </div> */}
              {/* <div className="flex items-start space-x-3">
                <Scale className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Legal Matters</p>
                  <p className="text-sm text-gray-600">legal@privnote.com</p>
                  <p className="text-xs text-gray-500 mt-1">For legal inquiries and compliance matters</p>
                </div>
              </div> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://x.com/SecnoteApp"
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a
                  href="https://github.com/"
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
              {/* <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Help Center</p>
                <div className="space-y-2">
                  <Link to="/faq" className="block text-sm text-blue-600 hover:text-blue-800">
                    Frequently Asked Questions
                  </Link>
                  <Link to="/docs" className="block text-sm text-blue-600 hover:text-blue-800">
                    Documentation & Guides
                  </Link>
                  <Link to="/status" className="block text-sm text-blue-600 hover:text-blue-800">
                    Service Status
                  </Link>
                </div>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
