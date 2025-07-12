import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Copy, ArrowLeft } from "lucide-react";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";
import axios from "axios";
import Navbar from "@/components/sections/navbar/default";
import FooterSection2 from "@/components/sections/footer/default";
import { toast, Toaster } from "sonner";
import { server_url } from "@/utils/API";

export default function CreateNote() {
  const [noteContent, setNoteContent] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [createdLink, setCreatedLink] = useState("");
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateNote = async () => {
    if (!noteContent.trim()) return;

    if (isPasswordProtected && password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (isPasswordProtected && password.length < 4) {
      alert("Password must be at least 4 characters long!");
      return;
    }

    setIsCreating(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const key = nacl.randomBytes(nacl.secretbox.keyLength);
    const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
    const message = naclUtil.decodeUTF8(noteContent);

    const encrypted = nacl.secretbox(message, nonce, key);

    const keyB64 = naclUtil.encodeBase64(key);
    const nonceB64 = naclUtil.encodeBase64(nonce);
    const encryptedB64 = naclUtil.encodeBase64(encrypted);

    let encPwdB64 = null;
    if (isPasswordProtected == true) {
      const pwd = naclUtil.decodeUTF8(confirmPassword);
      const encPwd = nacl.secretbox(pwd, nonce, key); 
      encPwdB64 = naclUtil.encodeBase64(encPwd);
      // console.log(encPwdB64)
    }

    const payload = {
      encrypted: encryptedB64,
      key: keyB64,
    };

    if (isPasswordProtected === true && encPwdB64) {
      payload.pwd = encPwdB64;
    }

    try {
      const res = await axios.post(`${server_url}/create`, payload);

      const { id } = res.data;
      const link = `${window.location.origin}/v/${id}#${nonceB64}`;
      setCreatedLink(link);
    } catch (err) {
      console.error("Error creating note:", err);
      alert("Something went wrong while creating the note.");
    }

    setIsCreating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(createdLink);
    toast("Copied to clipboard!");
  };

  if (createdLink) {
    return (
      <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
        {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-8 h-8 bg-blue-500 rounded" />
          <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400 rounded" />
          <div className="absolute bottom-40 left-32 w-9 h-9 bg-blue-500 rounded" />
        </div> */}
        <Navbar />
        <nav className="relative z-10 flex justify-between items-center p-6">
          {/* <Link to="/" className="text-2xl font-bold text-gray-900">
            Privnote
          </Link> */}
          {/* <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link> */}
        </nav>

        <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-24">
          <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm border-white/30 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600">
                Note Created Successfully!
              </CardTitle>
              <CardDescription>
                Your note has been encrypted and is ready to share. Remember, it
                will self-destruct after being read once.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="note-link">Share this link:</Label>
                <div className="flex mt-2">
                  <input
                    id="note-link"
                    type="text"
                    value={createdLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50"
                  />
                  <Button
                    onClick={copyToClipboard}
                    className="rounded-l-none h-[43px]"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={() => {
                    setCreatedLink("");
                    setNoteContent("");
                    setPassword("");
                    setConfirmPassword("");
                    setIsPasswordProtected(false);
                  }}
                  className="flex-1 cursor-pointer"
                >
                  Create Another Note
                </Button>
                <Link to="/" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full bg-white/50 backdrop-blur-sm cursor-pointer"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        <Toaster />
        <FooterSection2 />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
      {/* <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        ></div> */}
      <Navbar />
      <nav className="relative z-10 flex justify-between items-center p-6">
        {/* <Link to="/" className="text-2xl font-bold text-gray-900">
          Privnote
        </Link> */}
        {/* <div className="flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
        </div> */}
      </nav>

      <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
        <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm border-white/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              Create a Self-Destructing Note
            </CardTitle>
            <CardDescription>
              Write your confidential message below. It will be encrypted and
              automatically deleted after being read once.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="note-content">Your Note</Label>
              <Textarea
                id="note-content"
                placeholder="Type your note here..."
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                className="mt-2 min-h-[200px] resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                {noteContent.length} characters
              </p>
            </div>

            {/* <div className="flex items-center space-x-2">
              <Switch id="encryption" checked={isEncrypted} onCheckedChange={setIsEncrypted} />
              <Label htmlFor="encryption">Enable zero-width character encryption (recommended)</Label>
            </div> */}

            <div className="flex items-center space-x-2">
              <Switch
                id="password-protection"
                checked={isPasswordProtected}
                onCheckedChange={setIsPasswordProtected}
              />
              <Label htmlFor="password-protection">
                Add password protection (optional)
              </Label>
            </div>

            {isPasswordProtected && (
              <div className="space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter password (min 4 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                {password &&
                  confirmPassword &&
                  password !== confirmPassword && (
                    <p className="text-sm text-red-600">
                      Passwords don't match
                    </p>
                  )}
              </div>
            )}
            {/* 
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Security Features:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Note will self-destruct after being read once</li>
                <li>
                  • Advanced zero-width character encryption enabled
                </li>
                {isPasswordProtected && <li>• Password protection enabled</li>}
                <li>• No server-side logging or storage</li>
              </ul>
            </div> */}

            <Button
              onClick={handleCreateNote}
              disabled={
                !noteContent.trim() ||
                isCreating ||
                (isPasswordProtected &&
                  (!password || password !== confirmPassword))
              }
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              {isCreating ? "Creating Note..." : "Create Secure Note"}
            </Button>
          </CardContent>
        </Card>
      </main>
      <FooterSection2 />
      <Toaster />
    </div>
  );
}
