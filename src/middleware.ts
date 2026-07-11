import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Only protect the /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = req.headers.get('authorization')
    
    // HTTP Basic Auth requires base64 encoding of username:password
    if (authHeader) {
      const authValue = authHeader.split(' ')[1]
      const [username, password] = Buffer.from(authValue, 'base64').toString().split(':')
      
      const adminUsername = process.env.ADMIN_USERNAME
      const adminPassword = process.env.ADMIN_PASSWORD
      
      if (adminUsername && adminPassword && username === adminUsername && password === adminPassword) {
        return NextResponse.next()
      }
    }
    
    // Request Authentication
    return new NextResponse('Authentication required.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Admin Area"'
      }
    })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
