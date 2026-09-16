import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={metadataBase:new URL('https://likhith-in-practice.likhith11ramesha.chatgpt.site'),title:{default:'Likhith Ramesha — In practice',template:'%s — Likhith Ramesha'},description:'Code, judgment, and bringing people together. Explore Likhith Ramesha’s work across AI, engineering, product, and the whole problem.',icons:{icon:'/favicon.svg'},alternates:{canonical:'/'},openGraph:{title:'Likhith Ramesha — In practice',description:'High range. Full commitment. AI, engineering, product, and people.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
