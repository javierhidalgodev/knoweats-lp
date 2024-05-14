import Header from "./components/Header"
import Footer from "./components/Footer"

export interface LayoutProps {
    children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )

}

export default Layout