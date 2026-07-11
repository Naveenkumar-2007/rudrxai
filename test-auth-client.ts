import { authClient } from "./src/lib/auth-client";

console.log("forgetPassword:", typeof (authClient as any).forgetPassword);
console.log("forgotPassword:", typeof (authClient as any).forgotPassword);
console.log("sendPasswordReset:", typeof (authClient as any).sendPasswordReset);
console.log("resetPassword:", typeof (authClient as any).resetPassword);
