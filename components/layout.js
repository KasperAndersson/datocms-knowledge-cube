import Link from 'next/link';
import Alert from '../components/alert'
import Footer from '../components/footer'

export default function Layout({ preview, menu, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
				<header>
					{menu.map(item => (
						<Link href={item.slug}>{ item.title }</Link>
					))}
				</header>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
