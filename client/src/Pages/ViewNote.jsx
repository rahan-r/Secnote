import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Eye, Home } from "lucide-react";
import { Label } from "@/components/ui/label";
import axios from "axios";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";
import Navbar from "@/components/sections/navbar/default";
import FooterSection2 from "@/components/sections/footer/default";
import AlertIcon from "@/components/logos/alert";
import { server_url } from "@/utils/API";

// function decryptWithPassword(encrypted, password) {
//   if (!password) return encrypted

//   let decrypted = ""
//   for (let i = 0; i < encrypted.length; i++) {
//     const encryptedChar = encrypted.charCodeAt(i)
//     const keyChar = password.charCodeAt(i % password.length)
//     decrypted += String.fromCharCode(encryptedChar ^ keyChar)
//   }
//   return decrypted
// }

export default function ViewNote() {
  const { id } = useParams();
  const [noteData, setNoteData] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [decryptedContent, setDecryptedContent] = useState("");
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [receivedPwd, setReceivedPwd] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `${server_url}/note/${id}`
        );
        // console.log(response.data.exists)
        if (response.data.exists) {
          // console.log('Note exists:', response.data);
          setNoteData(response.data);
          if (response.data.pwd) {
            const encryptedPwd = response.data.pwd;
            // console.log("Pwd Needed")
            setIsPasswordRequired(true);
            setReceivedPwd(encryptedPwd);
          } else {
            // console.log('password not required')
          }
        } else {
          // console.log('Note does not exist');
          setNoteData("");
        }
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    fetchNote();
  }, [id]);

  const verifyPassword = () => {
    if (!enteredPassword) {
      setPasswordError("Please enter the password");
    } else {
      const pwd = receivedPwd;
      const key = noteData.key;
      const nonce = window.location.hash.slice(1);

      const keyBytes = naclUtil.decodeBase64(key);
      const nonceBytes = naclUtil.decodeBase64(nonce);
      const pwdBytes = naclUtil.decodeBase64(pwd);
      const decryptedPwd = nacl.secretbox.open(pwdBytes, nonceBytes, keyBytes);
      const plainPwd = naclUtil.encodeUTF8(decryptedPwd);
      // console.log(plainPwd)
      if (plainPwd == enteredPassword) {
        revealNote();
      } else {
        setPasswordError("Invalid Password");
      }
    }
  };

  const revealNote = () => {
    // if (!noteData) return
    const content = noteData.data;
    const key = noteData.key;
    const nonce = window.location.hash.slice(1);

    const keyBytes = naclUtil.decodeBase64(key);
    const nonceBytes = naclUtil.decodeBase64(nonce);
    const encryptedBytes = naclUtil.decodeBase64(content);

    const decrypted = nacl.secretbox.open(encryptedBytes, nonceBytes, keyBytes);

    if (decrypted) {
      const plainText = naclUtil.encodeUTF8(decrypted);
      setDecryptedContent(plainText);
    } else {
      setDecryptedContent("🔒 Decryption failed. Wrong key or corrupted data.");
    }

    const deleteNote = async () => {
      try {
        const response = await axios.delete(
          `${server_url}/delete/${id}`
        );
        if (response.data.exists) {
          // console.log('Note deleted:', response.data);
        } else {
          // console.log('Note does not exist');
        }
      } catch (error) {
        console.error("Error deleting  note:", error);
      }
    };

    deleteNote();

    // if (noteData.encrypted) {
    //   content = decryptZeroWidth(content)
    // }

    // if (noteData.passwordProtected && enteredPassword) {
    //  const content = decryptWithPassword(content, enteredPassword)
    // }

    setIsRevealed(true);
  };

  if (!noteData) {
    return (
      <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
        <Navbar />
        {/* <nav className="relative z-10 flex justify-between items-center p-6">
          <Link to="/" className="text-2xl font-bold text-gray-900">Privnote</Link>
        </nav> */}
        <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-2xl border-red-200 bg-white/80 backdrop-blur-sm  shadow-xl">
            <CardHeader className="text-center">
              {/* <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <AlertIcon/>
              </div> */}
              <CardTitle className="text-2xl font-bold text-red-600">
                Note Not Found
              </CardTitle>
              <CardDescription>
                This note doesn't exist or has already been destroyed.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <FooterSection2 />
      </div>
    );
  }

  // if (isDestroyed) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 relative overflow-hidden g-font">
  //       <nav className="relative z-10 flex justify-between items-center p-6">
  //         <Link to="/" className="text-2xl font-bold text-gray-900">Privnote</Link>
  //       </nav>
  //       <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
  //         <Card className="w-full max-w-2xl border-red-200">
  //           <CardHeader className="text-center">
  //             <CardTitle className="text-2xl text-red-600">Note Not Found</CardTitle>
  //             <CardDescription>This note doesn't exist or has already been destroyed.</CardDescription>
  //           </CardHeader>
  //           <CardContent className="text-center">
  //             <Link to="/">
  //               <Button className="bg-blue-500 hover:bg-blue-600">Return Home</Button>
  //             </Link>
  //           </CardContent>
  //         </Card>
  //       </main>
  //     </div>
  //   )
  // }

  if (isRevealed) {
    return (
      <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
        <Navbar />
        {/* <nav className="relative z-10 flex justify-between items-center p-6">
          <Link to="/" className="text-2xl font-bold text-gray-900">Privnote</Link>
        </nav> */}
        <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                Confidential Note
              </CardTitle>
              <CardDescription>
                Someone has sent you a self-destructing note.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 min-h-[200px]">
                <p className="whitespace-pre-wrap text-gray-900 leading-relaxed">
                  {decryptedContent}
                </p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  {/* <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" /> */}
                  <p className="text-sm text-yellow-800">
                    <strong>Security Notice:</strong> This note has been
                    permanently deleted. Please ensure you save any necessary
                    information before closing this window.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
        <FooterSection2 />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden g-font">
      <Navbar />
      {/* <nav className="relative z-10 flex justify-between items-center p-6">
        <Link to="/" className="text-2xl font-bold text-gray-900">Privnote</Link>
      </nav> */}
      <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 py-12">
        <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm border-white/30 shadow-xl">
          <CardHeader className="text-center">
            {/* <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-blue-500" />
            </div> */}
            <CardTitle className="text-2xl">
              You've Received a Confidential Note
            </CardTitle>
            <CardDescription>
              {/* Someone has sent you an encrypted, self-destructing note. Click below to reveal it. */}
              <strong className="block mt-2 text-red-600">
                Warning: The note will be permanently destroyed after you read
                it.
              </strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">
                Security Information:
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• This note is protected with end-to-end encryption</li>
                {noteData.passwordProtected && (
                  <li>• This note is password protected</li>
                )}
                <li>• No copies are stored on any server</li>
                <li>
                  • Created:{" "}
                  {new Date(noteData.created).toLocaleString(undefined, {
                    hour12: true,
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </li>
              </ul>
            </div>

            {isPasswordRequired ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="note-password">
                    This note is password protected
                  </Label>
                  <input
                    id="note-password"
                    type="password"
                    placeholder="Enter password to unlock"
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && verifyPassword()}
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {passwordError && (
                    <p className="text-sm text-red-600 mt-1">{passwordError}</p>
                  )}
                </div>
                <Button
                  onClick={verifyPassword}
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Reveal Note
                </Button>
              </div>
            ) : (
              <Button
                onClick={revealNote}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                <Eye className="w-4 h-4 mr-2" />
                Reveal Note
              </Button>
            )}

            <p className="text-xs text-gray-500 text-center">
              By clicking "Reveal Note", you acknowledge that this note will be
              permanently destroyed and cannot be recovered.
            </p>
          </CardContent>
        </Card>
      </main>
      <FooterSection2 />
    </div>
  );
}
