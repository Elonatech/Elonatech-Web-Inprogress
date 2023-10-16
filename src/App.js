import { createBrowserRouter, RouterProvider, Outlet , BrowserRouter as Router  } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Error from './components/error/error';
import Web from './components/web/web';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Team from './components/team/team';
import Company from './components/company/company';
import Network from './components/network/network';
import Policy from './components/policy/policy';
import Digital from './components/digital/digital';
import Hardware from './components/hardware/hardware';
import Home from './components/home/home';
import Engineer from './components/engineer/engineer';
import Mobile from './components/mobile/mobile';
import Printer from './components/printer/printer';
import Access from './components/access/access';
import Suvalliance from './components/suvalliance/suvalliance';
import Networka from './components/networkA/networka';
import Server from './components/server/server';
import Integration from './components/integration/integration';
import Cabling from './components/cabling/cabling';
import Cctv from './components/cctv/cctv';
import Internet from './components/internet/internet';
import Security from './components/security/security';
import Time from './components/time/time';

// telecom pages
import Voip from './pages/telecom/voip';
import Telecom from './pages/telecom/telecom';
import IpTelephony from './pages/telecom/ip-telephony';

// web pages
import Design from './pages/webs/design/design';
import Domain from './pages/webs/domain/domain';
import Hosting from './pages/webs/hosting/hosting';

// video 
import Video from './pages/video/video/video';
import Animation from './pages/video/animation/animation';

// graphic 
import Prototype from './pages/graphic/prototype/prototype';
import Brand from './pages/graphic/brand/brand';


// marketing
import Content from './pages/marketing/content/content';
import Ppc from './pages/marketing/ppc/ppc';
import Seo from './pages/marketing/seo/seo';
import Social from './pages/marketing/social/social';
import Mail from './pages/marketing/mail/mail';


// software

import Application from './pages/software/application/application';
import Business from './pages/software/business/business';
import System from './pages/software/system/system';
import Software from './pages/software/software/software';

// support
import Technical from './pages/support/technical/technical';
import Remote from './pages/support/remote/remote';
import Admin from './pages/support/admin/admin';

// sales
import Computer from './pages/sales/computer/computer';
import Office from './pages/sales/office/office';
import Shop from './pages/sales/shop/shop'
import Pos from './pages/sales/pos/pos';
import PrinterSales from './pages/sales/printers/printers'

// single products
import SingleProduct from './pages/sales/singleProduct/singleProduct';


const Layout = () =>{
  return(
  <>
  
  <Navbar />
  <Outlet/>
  <Footer />
  </>
  )
}

const router = createBrowserRouter([
{
  path:"/",
  element: <Layout/>,
  errorElement:<Error />,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/hardware',
      element:<Hardware/>
    },
    {
      path:'/hardware',
      element:<Hardware/>
    },
    {
      path:'/network',
      element:<Network/>
    },
    {
      path:'/portfolio',
      element:<Portfolio/>
    },
    {
      path:'/digital',
      element:<Digital/>
    },
    {
      path:'/policy',
      element:<Policy/>
    },
    {
      path:'/company',
      element:<Company/>
    },
    {
      path:'/web',
      element:<Web/>
    },
    {
      path:'/shop',
      element:<Shop/>
    },
    {
      path:'/team',
      element:<Team/>
    },
    {
      path:'/engineer',
      element:<Engineer/>
    },
    {
      path:'/mobile',
      element:<Mobile/>
    },
    {
      path:'/printer',
      element:<Printer/>
    },
    {
      path:'/integration',
      element:<Integration/>
    },
    {
      path:'/cabling',
      element:<Cabling/>
    },
    {
      path:'/cctv',
      element:<Cctv />
    },
    {
      path:'/internet',
      element:< Internet/>
    },
    {
      path:'/networksecurity',
      element:<Security/>
    },
    {
      path:'/access-control',
      element:<Access/>
    },
    {
      path:'/time',
      element:<Time/>
    },
    {
      path:'/surveilance',
      element:<Suvalliance/>
    },
    {
      path:'/networka',
      element:<Networka/>
    },
    {
      path:'/server',
      element:<Server/>
    },
    // telecom pages
    {
      path:'/telecom',
      element:<Telecom/>
    },
    {
      path:'/ip',
      element:<IpTelephony/>
    },
    {
      path:'/voip',
      element:<Voip/>
    },
    // web pages
    {
      path:'/design',
      element:<Design/>
    },
 
    {
      path:'/domain',
      element:<Domain/>
    },
 
    {
      path:'/hosting',
      element:<Hosting/>
    },
    // video
    {
      path:'/animation',
      element:<Animation/>
    },
 
    {
      path:'/video',
      element:<Video/>
    },
    //graphic
     {
      path:'/brand',
      element:<Brand/>
     },
     {
      path:'/prototype',
      element:<Prototype/>
     },
      // marketing
      {
        path:'/content',
        element:<Content/>
       },
      {
        path:'/ppc',
        element:<Ppc/>
       },
   
      {
        path:'/seo',
        element:<Seo/>
       },
      {
        path:'/social',
        element:<Social/>
      },
      {
        path:'/mail',
        element:<Mail/>
      },
      //  software

      {
        path:"/application",
        element:<Application/>
      },
      {
        path:"/business",
        element:<Business/>
      },
      {
        path:"/system",
        element:<System/>
      },
      {
        path:"/software",
        element:<Software/>
      },
      // support
      {
        path:"/technical",
        element:<Technical/>
      },
      {
        path:"/remote",
        element:<Remote/>
      },
      {
        path:"/admin",
        element:<Admin/>
      },
      // sales
      {
        path:"/computer",
        element:< Computer/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/printer-sales",
        element:<PrinterSales/>
      },
      {
        path:"/office",
        element:<Office/>
      },
      {
        path:"/pos",
        element:<Pos/>
      },
      {
        path:"/printer",
        element:<Printer/>
      },
      // single product
      {
        path:"/pro",
        element:<SingleProduct/>
      },
  ],

},

]);

function App() {
  return (
<div>
<RouterProvider router={router} /> 
</div> 
  );
}

export default App;
