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
import Blog from './components/blog/blog';

// telecom pages
import Voip from './pages/telecom/voip';
import Telecom from './pages/telecom/telecom';
import IpTelephony from './pages/telecom/ip-telephony';

// web pages
import Design from './pages/webs/design/design';
import Domain from './pages/webs/domain/domain';
import Hosting from './pages/webs/hosting/hosting';

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


// sales
import Computer from './pages/sales/computer/computer';
import Office from './pages/sales/office/office';
import Shop from './pages/sales/shop/shop'
import Pos from './pages/sales/pos/pos';
import PrinterSales from './pages/sales/printers/printers'

// single products
import SingleProduct from './pages/sales/singleProduct/singleProduct';
import Infinite from './pages/sales/infinite/infinite';
import Grid from './pages/sales/grid/grid';
import BlogDetails from './components/blogDetails/blogDetails';
import BlogWrite from './components/blogWrite/blogWrite';

// Add
import Graphic from './pages/add/graphic/graphic';
import Branding from './pages/add/branding/branding';
import Animation from './pages/add/animation/Animation';
import Video from './pages/add/video/Video';
import Motion from './pages/add/motion/motion';
import Uiux from './pages/add/uiux/uiux';
import Career from './pages/add/career/career';
import Technical from './pages/add/technical/technical';
import Remote from './pages/add/remote/remote';
import Livestreaming from './pages/add/livestreaming/livestreaming';
import Videoconferencing from './pages/add/videoconferencing/videoconferencing';

// career page
import AnimationCareer from './pages/add/animationCareer/animationCareer';
import DigitalCareer from './pages/add/digitalCareer/digitalCareer';
import GraphicCareer from './pages/add/graphicCareer/graphicCareer';
import MarketingCareer from './pages/add/marketingCareer/marketingCareer';
import SystemCareer from './pages/add/systemCareer/systemCareer';
import WebCareer from './pages/add/webCareer/webCareer';



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
// errorElement:<Error />,
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
      path:'/blog',
      element:<Blog/>
    },
    {
      path:'/blog/:id',
      element:<BlogDetails/>
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
      // sales
      {
        path:"/computers",
        element:< Computer/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/infinite",
        element:<Infinite/>
      },
      
      {
        path:"/printer-sales",
        element:<PrinterSales/>
      },
      {
        path:"/office-equipment",
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
      
      // add

      {
        path:"/graphic",
        element:< Graphic />
      },
      {
        path:"/brand",
        element:< Branding />
      },
      {
        path:'/animation',
        element:<Animation/>
      },
      {
        path:"/video",
        element:< Video />
      },
      {
        path:"/motion",
        element:< Motion />
      },
   
      {
        path:"/uiux",
        element:< Uiux />
      },
      {
        path:"/career",
        element:< Career />
      },
      {
        path:"/technical",
        element:< Technical />
      },
      {
        path:"/technical",
        element:< Technical />
      },
      {
        path:"/remote",
        element:< Remote />
      },
      {
        path:"/livestreaming",
        element:< Livestreaming />
      },
      {
        path:"/videoconferencing",
        element:< Videoconferencing />
      },
      // career page
      {
        path:"/animation-career",
        element:< AnimationCareer />
      },
      {
        path:"/digital-career",
        element:< DigitalCareer  />
      },
      {
        path:"/graphic-career",
        element:< GraphicCareer  />
      },
      {
        path:"/marketing-career",
        element:<  MarketingCareer />
      },
      {
        path:"/system-career",
        element:< SystemCareer />
      },
      {
        path:"/web-career",
        element:< WebCareer />
      },
      
      {
        path:"/write",
        element:< BlogWrite />
      },
      
 
   
  ],

},
{
  path:"/grid",
  element:<Grid/>
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
